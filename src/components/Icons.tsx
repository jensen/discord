const sizes = {
  base: "1rem",
  lg: "1.25rem",
  xl: "1.5rem",
} as const;

interface IconProps {
  size?: keyof typeof sizes;
}

export const HashIcon = ({ size = "base" }: IconProps) => (
  <svg
    height={sizes[size]}
    viewBox="0 0 24 24"
    x="0"
    y="0"
    aria-hidden="true"
    className="fill-current"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"
    ></path>
  </svg>
);

export const DiscordIcon = ({ size = "base" }: IconProps) => (
  <svg
    height={sizes[size]}
    viewBox="0 0 73 58"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M61.7958 5.49405C57.0736 3.28465 52.0244 1.67895 46.7456 0.764648C46.0973 1.93675 45.3399 3.51325 44.8177 4.76735C39.2062 3.92345 33.6463 3.92345 28.138 4.76735C27.6159 3.51325 26.8413 1.93675 26.1872 0.764648C20.9027 1.67895 15.8477 3.29055 11.1255 5.50575C1.60078 19.8988 -0.981215 33.9344 0.309785 47.7707C6.62708 52.4883 12.7493 55.3542 18.7682 57.2295C20.2543 55.1842 21.5797 53.0099 22.7215 50.7185C20.5469 49.8922 18.4641 48.8726 16.4961 47.6888C17.0182 47.302 17.5289 46.8975 18.0223 46.4814C30.0257 52.0957 43.0677 52.0957 54.9277 46.4814C55.4269 46.8975 55.9375 47.302 56.4539 47.6888C54.4801 48.8784 52.3916 49.898 50.217 50.7244C51.3588 53.0099 52.6785 55.19 54.1703 57.2352C60.195 55.3599 66.3229 52.4942 72.6402 47.7707C74.155 31.7309 70.0525 17.8242 61.7958 5.49405ZM24.3568 39.2616C20.7535 39.2616 17.7985 35.8977 17.7985 31.8013C17.7985 27.7049 20.6904 24.3351 24.3568 24.3351C28.0233 24.3351 30.9782 27.699 30.9151 31.8013C30.9208 35.8977 28.0233 39.2616 24.3568 39.2616ZM48.5932 39.2616C44.9899 39.2616 42.0349 35.8977 42.0349 31.8013C42.0349 27.7049 44.9267 24.3351 48.5932 24.3351C52.2596 24.3351 55.2146 27.699 55.1515 31.8013C55.1515 35.8977 52.2596 39.2616 48.5932 39.2616Z" />
  </svg>
);