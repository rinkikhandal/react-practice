import PropTypes from "prop-types";

const ThemeSelect = ({ theme, handleClick }) => {
  const raysAnimationClass = "opacity-0 animate-[fadeIn_0s_ease-out_forwards]";
  const rayDurations = [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4];

  return (
    <div className="absolute top-5 right-40">
      <button
        aria-label={`theme change button. Click to change the theme from ${theme} to ${
          theme === "dark" ? "light" : "dark"
        }`}
        onClick={handleClick}
      >
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`h-14 w-14 ${
            theme === "dark"
              ? "drop-shadow-[10px_10px_291px_38px_rgba(163,216,244,0.75)]"
              : "drop-shadow-[10px_10px_291px_38px_rgba(244,244,109,0.75)]"
          }   dark:rotate-[360deg] transition-transform duration-500 ease-[linear(0,_0.012_0.9%,_0.049_2%,_0.409_9.3%,_0.513_11.9%,_0.606_14.7%,_0.691_17.9%,_0.762_21.3%,_0.82_25%,_0.868_29.1%,_0.907_33.6%,_0.937_38.7%,_0.976_51.3%,_0.994_68.8%,_1)]`}
        >
          {theme === "light" && (
            <path
              className="stroke-amber-600 fill-amber-500"
              d="M14.5 19.3323C17.1694 19.3323 19.3333 17.1684 19.3333 14.499C19.3389 11.7466 17.1352 9.55826 14.5 9.66566C11.8306 9.66566 9.66667 11.8296 9.66667 14.499C9.66667 17.1684 11.8306 19.3323 14.5 19.3323Z"
            />
          )}
          {theme === "dark" && (
            <path
              className="stroke-blue-300 fill-blue-500"
              d="M14.5 19.3323C17.1694 19.3323 19.3333 17.1684 19.3333 14.499C15.6308 15.6696 13.2949 13.6212 14.5 9.66566C11.8306 9.66566 9.66667 11.8296 9.66667 14.499C9.66667 17.1684 11.8306 19.3323 14.5 19.3323Z"
            />
          )}
          {theme === "light" && (
            <g className="stroke-amber-500">
              {[
                "M24.1667 14.5H26.5833",
                "M23.0429 5.95708L21.3392 7.66083",
                "M14.5 2.41667V4.83333",
                "M5.8 5.8L7.25 7.25",
                "M2.41667 14.5H4.83333",
                "M7.66083 21.3392L5.95708 23.0429",
                "M14.5 24.1667V26.5833",
                "M21.3392 21.3392L23.0429 23.0429",
              ].map((d, index) => (
                <path
                  key={index}
                  d={d}
                  className={`${
                    theme === "light" ? `${raysAnimationClass}` : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${rayDurations[index]}s`,
                  }}
                />
              ))}
            </g>
          )}
        </svg>
      </button>
    </div>
  );
};

ThemeSelect.propTypes = {
  theme: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ThemeSelect;
