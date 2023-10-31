import "./style.scss";

interface CustomSVGProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  strokeWidth?: number;
  radius?: number;
  stroke?: string;
  vCheck?: boolean;
}

interface SVGInnerProps extends CustomSVGProps {
  path1: string;
  path2: string;
}

export default function CustomSVG({
  x,
  y,
  width = 133,
  height = 135,
  radius = 12,
  vCheck,
  ...props
}: CustomSVGProps) {
  const getPath1 = () => {
    const mx = width - 20;
    const my = height - radius;
    const cx = mx + 8;
    const cy = my - 8;

    const start = `M${mx} ${my}`;
    const curve1 = `C${mx} ${my - 4.418} ${cx - 4.418} ${cy} ${cx} ${cy}`;
    const line1 = `H${width}V${my}`;
    const curve2 = `C${width} ${my + 6.627} ${cx + 6.627} ${height} ${cx} ${height}`;
    const line2 = `H${mx}V${my}`;

    return { mx, my, path: `${start}${curve1}${line1}${curve2}${line2}Z` };
  };

  const getPath2 = (_mx: number, _my: number) => {
    const mx = _mx + 3;
    const my = _my + 1;
    const endX = width - 3;
    const endY = height - 3;

    const cx = mx + 6;
    const cy = my - 6;

    const start = `M${mx} ${my}`;
    const curve1 = `C${mx} ${my - 3.314} ${cx - 3.314} ${cy} ${cx} ${cy}`;
    const line1 = `H${endX}V${my}`;
    const curve2 = `C${endX} ${my + 3.971} ${cx + 3.971} ${endY} ${cx} ${endY}`;
    const line2 = `H${mx}V${my}`;
    return `${start}${curve1}${line1}${curve2}${line2}Z`;
  };

  const { mx, my, path: path1 } = getPath1();
  const path2 = getPath2(mx, my);

  return (
    <div
      className="custom-svg"
      style={{
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <SVGInner
        {...props}
        width={width}
        height={height}
        radius={radius}
        path1={path1}
        path2={path2}
        vCheck={vCheck}
      />
      {vCheck && (
        <div className="v-check-icon">
          <svg
            width="9"
            height="7"
            viewBox="0 0 9 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.88471 0.206803C7.02558 0.0726919 7.21303 -0.00145012 7.40753 2.14954e-05C7.60202 0.00149312 7.78833 0.0784635 7.92716 0.214691C8.06598 0.350918 8.14645 0.535747 8.15159 0.730177C8.15673 0.924607 8.08614 1.11343 7.95471 1.2568L3.96471 6.2468C3.8961 6.3207 3.81329 6.38001 3.72124 6.42117C3.62919 6.46233 3.52978 6.48451 3.42896 6.48638C3.32814 6.48825 3.22798 6.46976 3.13447 6.43204C3.04095 6.39431 2.95601 6.33811 2.88471 6.2668L0.238708 3.6208C0.165022 3.55214 0.105919 3.46934 0.0649275 3.37734C0.0239355 3.28534 0.0018935 3.18603 0.00011672 3.08533C-0.00166006 2.98462 0.0168648 2.88459 0.0545858 2.79121C0.0923068 2.69782 0.148451 2.61298 0.21967 2.54176C0.290889 2.47055 0.375723 2.4144 0.469111 2.37668C0.562499 2.33896 0.662528 2.32043 0.763231 2.32221C0.863934 2.32399 0.963247 2.34603 1.05525 2.38702C1.14725 2.42801 1.23005 2.48712 1.29871 2.5608L3.39271 4.6538L6.86571 0.228803C6.87196 0.221104 6.87864 0.213759 6.88571 0.206803H6.88471Z"
              fill="white"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

function SVGInner({
  width = 133,
  height = 135,
  strokeWidth = 3,
  radius = 12,
  stroke = "#FFAC5F",
  vCheck,
  path1,
  path2,
}: SVGInnerProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x={strokeWidth / 2}
        y={strokeWidth / 2}
        width={width - strokeWidth}
        height={height - strokeWidth}
        rx={radius - strokeWidth / 2}
        stroke={stroke}
        stroke-width={strokeWidth}
      />
      <path d={path1} fill={stroke} />
      {!vCheck && <path d={path2} fill="white" />}
    </svg>
  );
}
