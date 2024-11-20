import { useComputedColorScheme } from "@mantine/core";
import { useRouter } from "next/navigation";
function LightLogo() {
  const router = useRouter();
  return (
    <svg
      style={{ cursor: "pointer" }}
      onClick={() => router("/home")}
      width="110"
      height="60"
      viewBox="0 0 590 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M157.86 105.858C155.543 105.858 154.385 105.231 154.385 103.976V56.1449C154.385 52.4123 154.208 49.7256 153.854 48.0845C153.5 46.4113 153.323 45.4943 153.323 45.3334C153.323 44.6255 153.854 44.1268 154.916 43.8372C156.01 43.5154 157.039 43.3545 158.005 43.3545C158.809 43.3545 159.404 43.7889 159.79 44.6577C160.176 45.5265 160.45 46.4113 160.611 47.3123C160.804 48.2133 160.933 48.7924 160.997 49.0499C165.083 44.7703 169.636 42.6306 174.656 42.6306C178.099 42.6306 181.075 43.612 183.585 45.5747C186.095 47.5375 188.009 50.2565 189.329 53.7316C190.648 57.2067 191.308 61.1645 191.308 65.6049C191.308 70.4314 190.568 74.5661 189.087 78.0091C187.639 81.452 185.596 84.0583 182.958 85.8281C180.319 87.5978 177.278 88.4827 173.836 88.4827C171.358 88.4827 169.154 88.1126 167.223 87.3726C165.325 86.6325 163.442 85.5546 161.576 84.1388V103.976C161.576 105.231 160.45 105.858 158.198 105.858H157.86ZM172.195 82.1599C176.024 82.0634 178.903 80.6637 180.834 77.9608C182.765 75.2579 183.73 71.3324 183.73 66.1841C183.73 60.6496 182.813 56.3862 180.979 53.3937C179.177 50.3691 176.571 48.8568 173.16 48.8568C171.261 48.8568 169.283 49.3716 167.223 50.4013C165.196 51.4309 163.314 52.895 161.576 54.7934V78.2987C164.729 80.8728 168.269 82.1599 172.195 82.1599Z"
        fill="black"
      />
      <path
        d="M0 30C0 13.4315 13.4315 0 30 0H97C113.569 0 127 13.4315 127 30V97C127 113.569 113.569 127 97 127H30C13.4315 127 0 113.569 0 97V30Z"
        fill="#7B00FF"
      />
      <path
        d="M157.86 105.858C155.543 105.858 154.385 105.231 154.385 103.976V56.1449C154.385 52.4123 154.208 49.7256 153.854 48.0845C153.5 46.4113 153.323 45.4943 153.323 45.3334C153.323 44.6255 153.854 44.1268 154.916 43.8372C156.01 43.5154 157.039 43.3545 158.005 43.3545C158.809 43.3545 159.404 43.7889 159.79 44.6577C160.176 45.5265 160.45 46.4113 160.611 47.3123C160.804 48.2133 160.933 48.7924 160.997 49.0499C165.083 44.7703 169.636 42.6306 174.656 42.6306C178.099 42.6306 181.075 43.612 183.585 45.5747C186.095 47.5375 188.009 50.2565 189.329 53.7316C190.648 57.2067 191.308 61.1645 191.308 65.6049C191.308 70.4314 190.568 74.5661 189.087 78.0091C187.639 81.452 185.596 84.0583 182.958 85.8281C180.319 87.5978 177.278 88.4827 173.836 88.4827C171.358 88.4827 169.154 88.1126 167.223 87.3726C165.325 86.6325 163.442 85.5546 161.576 84.1388V103.976C161.576 105.231 160.45 105.858 158.198 105.858H157.86ZM172.195 82.1599C176.024 82.0634 178.903 80.6637 180.834 77.9608C182.765 75.2579 183.73 71.3324 183.73 66.1841C183.73 60.6496 182.813 56.3862 180.979 53.3937C179.177 50.3691 176.571 48.8568 173.16 48.8568C171.261 48.8568 169.283 49.3716 167.223 50.4013C165.196 51.4309 163.314 52.895 161.576 54.7934V78.2987C164.729 80.8728 168.269 82.1599 172.195 82.1599ZM216.647 88.4827C212.271 88.4827 208.844 87.2599 206.366 84.8145C203.889 82.3369 202.65 78.9261 202.65 74.5822V44.8508C202.65 43.5959 203.808 42.9684 206.125 42.9684H206.463C208.747 42.9684 209.89 43.5959 209.89 44.8508V73.9065C209.89 76.545 210.646 78.6043 212.158 80.0845C213.703 81.5324 215.859 82.2564 218.626 82.2564C220.556 82.2564 222.487 81.7255 224.418 80.6637C226.348 79.5697 228.021 78.0895 229.437 76.2233V44.8508C229.437 43.5959 230.58 42.9684 232.864 42.9684H233.202C235.519 42.9684 236.677 43.5959 236.677 44.8508V75.3062C236.677 79.0387 236.838 81.7416 237.16 83.4148C237.481 85.0558 237.642 85.9568 237.642 86.1177C237.642 86.8255 237.111 87.3404 236.05 87.6621C234.988 87.9517 233.99 88.0965 233.057 88.0965C232.253 88.0965 231.657 87.6461 231.271 86.7451C230.885 85.812 230.596 84.8628 230.403 83.8974C230.242 82.9321 230.129 82.3208 230.065 82.0634C228.263 84.0905 226.171 85.6672 223.79 86.7934C221.441 87.9196 219.06 88.4827 216.647 88.4827ZM255.211 88.1448C253.988 88.1448 253.103 88 252.556 87.7104C252.009 87.3886 251.736 86.906 251.736 86.2624V56.1449C251.736 52.4123 251.559 49.7256 251.205 48.0845C250.851 46.4113 250.674 45.4943 250.674 45.3334C250.674 44.6255 251.205 44.1268 252.267 43.8372C253.361 43.5154 254.39 43.3545 255.356 43.3545C256.128 43.3545 256.707 43.7728 257.093 44.6094C257.479 45.4139 257.817 46.5561 258.107 48.0363L258.348 49.0499C261.405 44.7703 264.719 42.6306 268.291 42.6306C269.932 42.6306 271.171 42.9362 272.007 43.5476C272.844 44.1268 273.262 44.9151 273.262 45.9126C273.262 46.8779 273.085 47.9076 272.731 49.0016C272.409 50.0634 272.023 50.5943 271.573 50.5943C271.348 50.5943 270.945 50.4978 270.366 50.3048C269.851 50.0795 269.337 49.9186 268.822 49.8221C268.307 49.6934 267.647 49.629 266.843 49.629C265.524 49.629 264.269 50.0152 263.078 50.7874C261.92 51.5597 260.938 52.4123 260.134 53.3455C259.33 54.2786 258.927 54.7934 258.927 54.89V86.2624C258.927 86.906 258.654 87.3886 258.107 87.7104C257.56 88 256.707 88.1448 255.549 88.1448H255.211ZM286.246 105.858C283.929 105.858 282.77 105.231 282.77 103.976V56.1449C282.77 52.4123 282.593 49.7256 282.24 48.0845C281.886 46.4113 281.709 45.4943 281.709 45.3334C281.709 44.6255 282.24 44.1268 283.301 43.8372C284.395 43.5154 285.425 43.3545 286.39 43.3545C287.195 43.3545 287.79 43.7889 288.176 44.6577C288.562 45.5265 288.836 46.4113 288.997 47.3123C289.19 48.2133 289.318 48.7924 289.383 49.0499C293.469 44.7703 298.022 42.6306 303.042 42.6306C306.485 42.6306 309.461 43.612 311.971 45.5747C314.481 47.5375 316.395 50.2565 317.715 53.7316C319.034 57.2067 319.693 61.1645 319.693 65.6049C319.693 70.4314 318.953 74.5661 317.473 78.0091C316.025 81.452 313.982 84.0583 311.344 85.8281C308.705 87.5978 305.664 88.4827 302.221 88.4827C299.744 88.4827 297.54 88.1126 295.609 87.3726C293.711 86.6325 291.828 85.5546 289.962 84.1388V103.976C289.962 105.231 288.836 105.858 286.583 105.858H286.246ZM300.58 82.1599C304.409 82.0634 307.289 80.6637 309.22 77.9608C311.15 75.2579 312.116 71.3324 312.116 66.1841C312.116 60.6496 311.199 56.3862 309.365 53.3937C307.563 50.3691 304.956 48.8568 301.546 48.8568C299.647 48.8568 297.668 49.3716 295.609 50.4013C293.582 51.4309 291.7 52.895 289.962 54.7934V78.2987C293.115 80.8728 296.655 82.1599 300.58 82.1599ZM342.716 88.4827C339.852 88.4827 337.294 87.6139 335.042 85.8763C332.789 84.1388 331.663 81.0659 331.663 76.6576V25.3516C331.663 24.0967 332.806 23.4692 335.09 23.4692H335.476C337.729 23.4692 338.855 24.0967 338.855 25.3516V75.9819C338.855 78.3308 339.273 79.9719 340.11 80.905C340.946 81.8381 342.073 82.3047 343.488 82.3047C344.55 82.3047 345.387 82.2403 345.998 82.1116C346.609 81.9829 347.012 81.9186 347.205 81.9186C347.72 81.9186 348.138 82.4334 348.46 83.4631C348.814 84.4927 348.991 85.3132 348.991 85.9246C348.991 87.63 346.899 88.4827 342.716 88.4827ZM375.971 88.4827C368.86 88.4827 363.567 86.6325 360.092 82.9321C356.649 79.1996 354.927 73.5043 354.927 65.8462C354.927 58.2524 356.616 52.4928 359.995 48.5672C363.374 44.6094 368.345 42.6306 374.909 42.6306C380.765 42.6306 385.173 44.529 388.134 48.3259C391.126 52.1227 392.622 57.6894 392.622 65.0257C392.622 65.3475 392.445 65.7979 392.092 66.3771C391.77 66.9241 391.368 67.4229 390.885 67.8733C390.434 68.2916 390.048 68.5008 389.727 68.5008H362.65C363.004 73.2952 364.226 76.8024 366.318 79.0226C368.441 81.2107 371.627 82.3047 375.874 82.3047C378.255 82.3047 380.299 82.0151 382.004 81.4359C383.742 80.8567 385.415 80.1488 387.024 79.3122C387.185 79.2479 387.426 79.1353 387.748 78.9744C388.069 78.8135 388.295 78.7331 388.423 78.7331C388.777 78.7331 389.179 79.0226 389.63 79.6018C390.113 80.1488 390.515 80.7763 390.837 81.4842C391.191 82.1599 391.368 82.6586 391.368 82.9804C391.368 83.6883 390.66 84.4766 389.244 85.3454C387.828 86.2142 385.93 86.9543 383.549 87.5656C381.2 88.177 378.674 88.4827 375.971 88.4827ZM384.948 62.3228C384.948 53.3133 381.521 48.8085 374.668 48.8085C367.299 48.8085 363.293 53.3133 362.65 62.3228H384.948ZM407.392 88.1448C406.169 88.1448 405.284 88 404.737 87.7104C404.19 87.3886 403.917 86.906 403.917 86.2624V56.1449C403.917 52.4123 403.74 49.7256 403.386 48.0845C403.032 46.4113 402.855 45.4943 402.855 45.3334C402.855 44.6255 403.386 44.1268 404.447 43.8372C405.541 43.5154 406.571 43.3545 407.536 43.3545C408.341 43.3545 408.936 43.7889 409.322 44.6577C409.708 45.5265 409.982 46.4113 410.143 47.3123C410.336 48.2133 410.465 48.7924 410.529 49.0499C412.331 47.0227 414.406 45.446 416.755 44.3198C419.136 43.1937 421.533 42.6306 423.947 42.6306C428.323 42.6306 431.733 43.8694 434.179 46.347C436.657 48.7924 437.895 52.171 437.895 56.4827V86.2624C437.895 86.906 437.622 87.3886 437.075 87.7104C436.528 88 435.659 88.1448 434.468 88.1448H434.082C432.924 88.1448 432.071 88 431.524 87.7104C430.977 87.3886 430.704 86.906 430.704 86.2624V57.2067C430.704 54.5682 429.932 52.525 428.387 51.077C426.875 49.5969 424.735 48.8568 421.968 48.8568C420.037 48.8568 418.09 49.4038 416.128 50.4978C414.197 51.5597 412.524 53.0237 411.108 54.89V86.2624C411.108 86.906 410.835 87.3886 410.288 87.7104C409.741 88 408.888 88.1448 407.729 88.1448H407.392ZM455.223 32.3018C452.938 32.3018 451.796 31.6743 451.796 30.4194V25.3516C451.796 24.0967 452.938 23.4692 455.223 23.4692H456.236C458.553 23.4692 459.711 24.0967 459.711 25.3516V30.4194C459.711 31.6743 458.553 32.3018 456.236 32.3018H455.223ZM455.56 88.1448C453.276 88.1448 452.134 87.5173 452.134 86.2624V44.8508C452.134 43.5959 453.276 42.9684 455.56 42.9684H455.898C458.215 42.9684 459.373 43.5959 459.373 44.8508V86.2624C459.373 87.5173 458.215 88.1448 455.898 88.1448H455.56ZM488.815 106.196C483.345 106.196 479.017 105.343 475.832 103.638C472.646 101.933 471.054 99.2458 471.054 95.5777C471.054 93.0679 471.778 90.8798 473.226 89.0136C474.674 87.1473 476.556 85.7476 478.873 84.8145L478.969 84.6214C477.843 83.7526 476.974 82.7552 476.363 81.629C475.784 80.5028 475.494 79.1674 475.494 77.6229C475.494 73.8904 477.103 70.898 480.321 68.6456C477.907 67.4872 476.073 65.8623 474.818 63.7708C473.563 61.6471 472.936 59.266 472.936 56.6275C472.936 53.989 473.58 51.6079 474.867 49.4842C476.186 47.3606 478.116 45.6874 480.658 44.4646C483.2 43.2419 486.257 42.6306 489.829 42.6306C491.727 42.6306 493.417 42.7914 494.897 43.1132H510.486C511.098 43.1132 511.532 43.3224 511.79 43.7407C512.079 44.1268 512.224 44.7703 512.224 45.6713V46.7331C512.224 47.6341 512.079 48.2937 511.79 48.712C511.532 49.0981 511.098 49.2912 510.486 49.2912C508.331 49.2912 506.336 49.2107 504.502 49.0499L504.405 49.1947C505.145 50.2243 505.692 51.3827 506.046 52.6698C506.432 53.9247 506.625 55.2439 506.625 56.6275C506.625 59.266 505.966 61.6471 504.646 63.7708C503.359 65.8945 501.445 67.5677 498.903 68.7904C496.393 70.0131 493.336 70.6245 489.732 70.6245C487.029 70.721 484.986 71.2197 483.603 72.1207C482.251 73.0216 481.575 74.5018 481.575 76.5611C481.575 78.0734 482.058 79.2318 483.023 80.0362C484.021 80.8406 485.26 81.4037 486.74 81.7255C488.22 82.0473 490.279 82.353 492.918 82.6425L495.428 82.9321C498.098 83.2861 500.335 83.7687 502.137 84.3801C503.938 84.9915 505.419 86.005 506.577 87.4208C507.767 88.8366 508.363 90.7833 508.363 93.2609C508.363 97.4117 506.706 100.597 503.391 102.817C500.077 105.07 495.219 106.196 488.815 106.196ZM489.732 64.9292C492.886 64.9292 495.395 64.2856 497.262 62.9985C499.128 61.7115 500.061 59.6039 500.061 56.6758C500.061 51.1414 496.618 48.3741 489.732 48.3741C482.943 48.3741 479.548 51.1414 479.548 56.6758C479.548 59.6039 480.465 61.7115 482.299 62.9985C484.166 64.2856 486.643 64.9292 489.732 64.9292ZM489.732 100.356C493.722 100.356 496.683 99.825 498.613 98.7632C500.544 97.7335 501.509 96.1568 501.509 94.0332C501.509 92.6496 500.994 91.5716 499.965 90.7994C498.935 90.0593 497.664 89.5284 496.152 89.2066C494.671 88.917 492.709 88.6435 490.263 88.3861C488.59 88.1931 487.206 88.0161 486.112 87.8552C485.051 87.6943 484.069 87.4691 483.168 87.1795C479.371 88.7883 477.473 91.1212 477.473 94.178C477.473 98.2966 481.559 100.356 489.732 100.356ZM525.352 88.1448C523.068 88.1448 521.925 87.5173 521.925 86.2624V25.3516C521.925 24.0967 523.068 23.4692 525.352 23.4692H525.69C528.007 23.4692 529.165 24.0967 529.165 25.3516V48.5189C530.838 46.8136 532.801 45.4139 535.053 44.3198C537.306 43.1937 539.703 42.6306 542.245 42.6306C545.849 42.6306 549.018 43.6441 551.753 45.6713C554.521 47.6984 555.904 51.3022 555.904 56.4827V86.2624C555.904 87.5173 554.762 88.1448 552.477 88.1448H552.139C549.823 88.1448 548.664 87.5173 548.664 86.2624V57.2067C548.664 54.6004 547.924 52.5571 546.444 51.077C544.964 49.5969 542.792 48.8568 539.928 48.8568C538.03 48.8568 536.276 49.3073 534.667 50.2082C533.091 51.1092 531.771 52.0906 530.71 53.1524C529.68 54.1821 529.165 54.7613 529.165 54.89V86.2624C529.165 87.5173 528.007 88.1448 525.69 88.1448H525.352ZM582.836 88.4827C579.972 88.4827 577.414 87.6139 575.162 85.8763C572.91 84.1388 571.783 81.0659 571.783 76.6576V49.2912H567.488C566.876 49.2912 566.426 49.0981 566.136 48.712C565.879 48.2937 565.75 47.6341 565.75 46.7331V45.6713C565.75 44.7703 565.879 44.1268 566.136 43.7407C566.426 43.3224 566.876 43.1132 567.488 43.1132H571.783L572.797 34.1359C572.861 32.881 573.778 32.2535 575.548 32.2535H576.369C577.27 32.2535 577.929 32.4144 578.348 32.7362C578.766 33.0258 578.975 33.4923 578.975 34.1359V43.1132H586.167C586.778 43.1132 587.212 43.3224 587.47 43.7407C587.759 44.1268 587.904 44.7703 587.904 45.6713V46.7331C587.904 47.6341 587.759 48.2937 587.47 48.712C587.212 49.0981 586.778 49.2912 586.167 49.2912H578.975V75.9819C578.975 78.3308 579.377 79.9719 580.182 80.905C581.018 81.8381 582.144 82.3047 583.56 82.3047C584.654 82.3047 585.491 82.2403 586.07 82.1116C586.681 81.9829 587.084 81.9186 587.277 81.9186C587.791 81.9186 588.21 82.4334 588.532 83.4631C588.885 84.4927 589.062 85.3132 589.062 85.9246C589.062 87.63 586.987 88.4827 582.836 88.4827Z"
        fill="#7B00FF"
      />
      <path
        d="M157.86 105.858C155.543 105.858 154.385 105.231 154.385 103.976V56.1449C154.385 52.4123 154.208 49.7256 153.854 48.0845C153.5 46.4113 153.323 45.4943 153.323 45.3334C153.323 44.6255 153.854 44.1268 154.916 43.8372C156.01 43.5154 157.039 43.3545 158.005 43.3545C158.809 43.3545 159.404 43.7889 159.79 44.6577C160.176 45.5265 160.45 46.4113 160.611 47.3123C160.804 48.2133 160.933 48.7924 160.997 49.0499C165.083 44.7703 169.636 42.6306 174.656 42.6306C178.099 42.6306 181.075 43.612 183.585 45.5747C186.095 47.5375 188.009 50.2565 189.329 53.7316C190.648 57.2067 191.308 61.1645 191.308 65.6049C191.308 70.4314 190.568 74.5661 189.087 78.0091C187.639 81.452 185.596 84.0583 182.958 85.8281C180.319 87.5978 177.278 88.4827 173.836 88.4827C171.358 88.4827 169.154 88.1126 167.223 87.3726C165.325 86.6325 163.442 85.5546 161.576 84.1388V103.976C161.576 105.231 160.45 105.858 158.198 105.858H157.86ZM172.195 82.1599C176.024 82.0634 178.903 80.6637 180.834 77.9608C182.765 75.2579 183.73 71.3324 183.73 66.1841C183.73 60.6496 182.813 56.3862 180.979 53.3937C179.177 50.3691 176.571 48.8568 173.16 48.8568C171.261 48.8568 169.283 49.3716 167.223 50.4013C165.196 51.4309 163.314 52.895 161.576 54.7934V78.2987C164.729 80.8728 168.269 82.1599 172.195 82.1599Z"
        fill="#7B00FF"
      />
      <g filter="url(#filter0_d_0_1)">
        <rect x="28" y="12" width="71" height="102" fill="white" />
      </g>
      <rect x="28" y="103" width="18" height="25" fill="white" />
      <g filter="url(#filter1_i_0_1)">
        <rect x="46" y="28" width="36" height="70" fill="#7B00FF" />
      </g>
      <defs>
        <filter
          id="filter0_d_0_1"
          x="15"
          y="0"
          width="103"
          height="134"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="3" dy="4" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.63 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_i_0_1"
          x="46"
          y="28"
          width="36"
          height="74"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="3.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.66 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1" />
        </filter>
      </defs>
    </svg>
  );
}
function DarkLogo() {
  const router = useRouter();
  return (
    <svg
      width="110"
      onClick={() => router("/home")}
      height="60"
      viewBox="0 0 519 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M157.86 105.858C155.543 105.858 154.385 105.231 154.385 103.976V56.1449C154.385 52.4123 154.208 49.7256 153.854 48.0845C153.5 46.4113 153.323 45.4943 153.323 45.3334C153.323 44.6255 153.854 44.1268 154.916 43.8372C156.01 43.5154 157.039 43.3545 158.005 43.3545C158.809 43.3545 159.404 43.7889 159.79 44.6577C160.176 45.5265 160.45 46.4113 160.611 47.3123C160.804 48.2133 160.933 48.7924 160.997 49.0499C165.083 44.7703 169.636 42.6306 174.656 42.6306C178.099 42.6306 181.075 43.612 183.585 45.5747C186.095 47.5375 188.009 50.2565 189.329 53.7316C190.648 57.2067 191.308 61.1645 191.308 65.6049C191.308 70.4314 190.568 74.5661 189.087 78.0091C187.639 81.452 185.596 84.0583 182.958 85.8281C180.319 87.5978 177.278 88.4827 173.836 88.4827C171.358 88.4827 169.154 88.1126 167.223 87.3726C165.325 86.6325 163.442 85.5546 161.576 84.1388V103.976C161.576 105.231 160.45 105.858 158.198 105.858H157.86ZM172.195 82.1599C176.024 82.0634 178.903 80.6637 180.834 77.9608C182.765 75.2579 183.73 71.3324 183.73 66.1841C183.73 60.6496 182.813 56.3862 180.979 53.3937C179.177 50.3691 176.571 48.8568 173.16 48.8568C171.261 48.8568 169.283 49.3716 167.223 50.4013C165.196 51.4309 163.314 52.895 161.576 54.7934V78.2987C164.729 80.8728 168.269 82.1599 172.195 82.1599Z"
        fill="black"
      />
      <path
        d="M0 30C0 13.4315 13.4315 0 30 0H97C113.569 0 127 13.4315 127 30V97C127 113.569 113.569 127 97 127H30C13.4315 127 0 113.569 0 97V30Z"
        fill="#1A243D"
      />
      <path
        d="M157.86 105.858C155.543 105.858 154.385 105.231 154.385 103.976V56.1449C154.385 52.4123 154.208 49.7256 153.854 48.0845C153.5 46.4113 153.323 45.4943 153.323 45.3334C153.323 44.6255 153.854 44.1268 154.916 43.8372C156.01 43.5154 157.039 43.3545 158.005 43.3545C158.809 43.3545 159.404 43.7889 159.79 44.6577C160.176 45.5265 160.45 46.4113 160.611 47.3123C160.804 48.2133 160.933 48.7924 160.997 49.0499C165.083 44.7703 169.636 42.6306 174.656 42.6306C178.099 42.6306 181.075 43.612 183.585 45.5747C186.095 47.5375 188.009 50.2565 189.329 53.7316C190.648 57.2067 191.308 61.1645 191.308 65.6049C191.308 70.4314 190.568 74.5661 189.087 78.0091C187.639 81.452 185.596 84.0583 182.958 85.8281C180.319 87.5978 177.278 88.4827 173.836 88.4827C171.358 88.4827 169.154 88.1126 167.223 87.3726C165.325 86.6325 163.442 85.5546 161.576 84.1388V103.976C161.576 105.231 160.45 105.858 158.198 105.858H157.86ZM172.195 82.1599C176.024 82.0634 178.903 80.6637 180.834 77.9608C182.765 75.2579 183.73 71.3324 183.73 66.1841C183.73 60.6496 182.813 56.3862 180.979 53.3937C179.177 50.3691 176.571 48.8568 173.16 48.8568C171.261 48.8568 169.283 49.3716 167.223 50.4013C165.196 51.4309 163.314 52.895 161.576 54.7934V78.2987C164.729 80.8728 168.269 82.1599 172.195 82.1599ZM216.647 88.4827C212.271 88.4827 208.844 87.2599 206.366 84.8145C203.889 82.3369 202.65 78.9261 202.65 74.5822V44.8508C202.65 43.5959 203.808 42.9684 206.125 42.9684H206.463C208.747 42.9684 209.89 43.5959 209.89 44.8508V73.9065C209.89 76.545 210.646 78.6043 212.158 80.0845C213.703 81.5324 215.859 82.2564 218.626 82.2564C220.556 82.2564 222.487 81.7255 224.418 80.6637C226.348 79.5697 228.021 78.0895 229.437 76.2233V44.8508C229.437 43.5959 230.58 42.9684 232.864 42.9684H233.202C235.519 42.9684 236.677 43.5959 236.677 44.8508V75.3062C236.677 79.0387 236.838 81.7416 237.16 83.4148C237.481 85.0558 237.642 85.9568 237.642 86.1177C237.642 86.8255 237.111 87.3404 236.05 87.6621C234.988 87.9517 233.99 88.0965 233.057 88.0965C232.253 88.0965 231.657 87.6461 231.271 86.7451C230.885 85.812 230.596 84.8628 230.403 83.8974C230.242 82.9321 230.129 82.3208 230.065 82.0634C228.263 84.0905 226.171 85.6672 223.79 86.7934C221.441 87.9196 219.06 88.4827 216.647 88.4827ZM255.211 88.1448C253.988 88.1448 253.103 88 252.556 87.7104C252.009 87.3886 251.736 86.906 251.736 86.2624V56.1449C251.736 52.4123 251.559 49.7256 251.205 48.0845C250.851 46.4113 250.674 45.4943 250.674 45.3334C250.674 44.6255 251.205 44.1268 252.267 43.8372C253.361 43.5154 254.39 43.3545 255.356 43.3545C256.128 43.3545 256.707 43.7728 257.093 44.6094C257.479 45.4139 257.817 46.5561 258.107 48.0363L258.348 49.0499C261.405 44.7703 264.719 42.6306 268.291 42.6306C269.932 42.6306 271.171 42.9362 272.007 43.5476C272.844 44.1268 273.262 44.9151 273.262 45.9126C273.262 46.8779 273.085 47.9076 272.731 49.0016C272.409 50.0634 272.023 50.5943 271.573 50.5943C271.348 50.5943 270.945 50.4978 270.366 50.3048C269.851 50.0795 269.337 49.9186 268.822 49.8221C268.307 49.6934 267.647 49.629 266.843 49.629C265.524 49.629 264.269 50.0152 263.078 50.7874C261.92 51.5597 260.938 52.4123 260.134 53.3455C259.33 54.2786 258.927 54.7934 258.927 54.89V86.2624C258.927 86.906 258.654 87.3886 258.107 87.7104C257.56 88 256.707 88.1448 255.549 88.1448H255.211ZM286.246 105.858C283.929 105.858 282.77 105.231 282.77 103.976V56.1449C282.77 52.4123 282.593 49.7256 282.24 48.0845C281.886 46.4113 281.709 45.4943 281.709 45.3334C281.709 44.6255 282.24 44.1268 283.301 43.8372C284.395 43.5154 285.425 43.3545 286.39 43.3545C287.195 43.3545 287.79 43.7889 288.176 44.6577C288.562 45.5265 288.836 46.4113 288.997 47.3123C289.19 48.2133 289.318 48.7924 289.383 49.0499C293.469 44.7703 298.022 42.6306 303.042 42.6306C306.485 42.6306 309.461 43.612 311.971 45.5747C314.481 47.5375 316.395 50.2565 317.715 53.7316C319.034 57.2067 319.693 61.1645 319.693 65.6049C319.693 70.4314 318.953 74.5661 317.473 78.0091C316.025 81.452 313.982 84.0583 311.344 85.8281C308.705 87.5978 305.664 88.4827 302.221 88.4827C299.744 88.4827 297.54 88.1126 295.609 87.3726C293.711 86.6325 291.828 85.5546 289.962 84.1388V103.976C289.962 105.231 288.836 105.858 286.583 105.858H286.246ZM300.58 82.1599C304.409 82.0634 307.289 80.6637 309.22 77.9608C311.15 75.2579 312.116 71.3324 312.116 66.1841C312.116 60.6496 311.199 56.3862 309.365 53.3937C307.563 50.3691 304.956 48.8568 301.546 48.8568C299.647 48.8568 297.668 49.3716 295.609 50.4013C293.582 51.4309 291.7 52.895 289.962 54.7934V78.2987C293.115 80.8728 296.655 82.1599 300.58 82.1599ZM342.716 88.4827C339.852 88.4827 337.294 87.6139 335.042 85.8763C332.789 84.1388 331.663 81.0659 331.663 76.6576V25.3516C331.663 24.0967 332.806 23.4692 335.09 23.4692H335.476C337.729 23.4692 338.855 24.0967 338.855 25.3516V75.9819C338.855 78.3308 339.273 79.9719 340.11 80.905C340.946 81.8381 342.073 82.3047 343.488 82.3047C344.55 82.3047 345.387 82.2403 345.998 82.1116C346.609 81.9829 347.012 81.9186 347.205 81.9186C347.72 81.9186 348.138 82.4334 348.46 83.4631C348.814 84.4927 348.991 85.3132 348.991 85.9246C348.991 87.63 346.899 88.4827 342.716 88.4827ZM375.971 88.4827C368.86 88.4827 363.567 86.6325 360.092 82.9321C356.649 79.1996 354.927 73.5043 354.927 65.8462C354.927 58.2524 356.616 52.4928 359.995 48.5672C363.374 44.6094 368.345 42.6306 374.909 42.6306C380.765 42.6306 385.173 44.529 388.134 48.3259C391.126 52.1227 392.622 57.6894 392.622 65.0257C392.622 65.3475 392.445 65.7979 392.092 66.3771C391.77 66.9241 391.368 67.4229 390.885 67.8733C390.434 68.2916 390.048 68.5008 389.727 68.5008H362.65C363.004 73.2952 364.226 76.8024 366.318 79.0226C368.441 81.2107 371.627 82.3047 375.874 82.3047C378.255 82.3047 380.299 82.0151 382.004 81.4359C383.742 80.8567 385.415 80.1488 387.024 79.3122C387.185 79.2479 387.426 79.1353 387.748 78.9744C388.069 78.8135 388.295 78.7331 388.423 78.7331C388.777 78.7331 389.179 79.0226 389.63 79.6018C390.113 80.1488 390.515 80.7763 390.837 81.4842C391.191 82.1599 391.368 82.6586 391.368 82.9804C391.368 83.6883 390.66 84.4766 389.244 85.3454C387.828 86.2142 385.93 86.9543 383.549 87.5656C381.2 88.177 378.674 88.4827 375.971 88.4827ZM384.948 62.3228C384.948 53.3133 381.521 48.8085 374.668 48.8085C367.299 48.8085 363.293 53.3133 362.65 62.3228H384.948Z"
        fill="#F1BEB5"
      />
      <path
        d="M413.183 88.8205C410.77 88.8205 408.518 88.5148 406.426 87.9035C404.335 87.2921 402.662 86.552 401.407 85.6833C400.184 84.7823 399.573 83.994 399.573 83.3183C399.573 82.9965 399.734 82.4817 400.055 81.7738C400.409 81.0659 400.811 80.4384 401.262 79.8914C401.745 79.3122 402.179 79.0226 402.565 79.0226C402.662 79.0226 402.951 79.1835 403.434 79.5053C404.721 80.3419 406.072 81.0498 407.488 81.629C408.936 82.2082 410.658 82.4977 412.653 82.4977C418.251 82.4977 421.051 80.181 421.051 75.5475C421.051 74.2283 420.777 73.1182 420.23 72.2172C419.715 71.3163 418.831 70.5279 417.576 69.8522C416.353 69.1443 414.664 68.4686 412.508 67.8251C409.419 66.9241 407.006 65.8945 405.268 64.7361C403.563 63.5777 402.356 62.2263 401.648 60.6818C400.94 59.1051 400.586 57.2067 400.586 54.9865C400.586 52.6054 401.181 50.4656 402.372 48.5672C403.595 46.6688 405.284 45.1886 407.44 44.1268C409.628 43.0649 412.089 42.534 414.824 42.534C416.723 42.534 418.541 42.711 420.278 43.0649C422.048 43.4189 423.464 43.8855 424.526 44.4646C425.62 45.0117 426.167 45.5908 426.167 46.2022C426.167 46.6527 426.006 47.264 425.684 48.0363C425.395 48.7764 425.025 49.436 424.574 50.0152C424.124 50.5622 423.721 50.8357 423.367 50.8357C423.303 50.8357 422.901 50.6426 422.161 50.2565C421.421 49.8382 420.472 49.4682 419.313 49.1464C418.187 48.7924 416.932 48.6155 415.548 48.6155C413.36 48.6155 411.542 49.1142 410.094 50.1117C408.679 51.077 407.971 52.3802 407.971 54.0212C407.971 55.9518 408.486 57.4963 409.515 58.6547C410.545 59.813 412.25 60.7622 414.631 61.5023C418.3 62.6285 421.099 63.7547 423.03 64.8809C424.96 66.0071 426.328 67.3907 427.132 69.0317C427.969 70.6406 428.387 72.7642 428.387 75.4027C428.387 77.9125 427.711 80.1971 426.36 82.2564C425.008 84.2836 423.174 85.8924 420.858 87.083C418.541 88.2413 415.983 88.8205 413.183 88.8205ZM457.732 88.4827C450.621 88.4827 445.328 86.6325 441.853 82.9321C438.41 79.1996 436.689 73.5043 436.689 65.8462C436.689 58.2524 438.378 52.4928 441.757 48.5672C445.135 44.6094 450.106 42.6306 456.671 42.6306C462.527 42.6306 466.935 44.529 469.895 48.3259C472.888 52.1227 474.384 57.6894 474.384 65.0257C474.384 65.3475 474.207 65.7979 473.853 66.3771C473.531 66.9241 473.129 67.4229 472.646 67.8733C472.196 68.2916 471.81 68.5008 471.488 68.5008H444.411C444.765 73.2952 445.988 76.8024 448.079 79.0226C450.203 81.2107 453.388 82.3047 457.636 82.3047C460.017 82.3047 462.06 82.0151 463.766 81.4359C465.503 80.8567 467.176 80.1488 468.785 79.3122C468.946 79.2479 469.187 79.1353 469.509 78.9744C469.831 78.8135 470.056 78.7331 470.185 78.7331C470.539 78.7331 470.941 79.0226 471.391 79.6018C471.874 80.1488 472.276 80.7763 472.598 81.4842C472.952 82.1599 473.129 82.6586 473.129 82.9804C473.129 83.6883 472.421 84.4766 471.005 85.3454C469.59 86.2142 467.691 86.9543 465.31 87.5656C462.961 88.177 460.435 88.4827 457.732 88.4827ZM466.71 62.3228C466.71 53.3133 463.283 48.8085 456.429 48.8085C449.061 48.8085 445.055 53.3133 444.411 62.3228H466.71ZM483.699 88.1448C482.38 88.1448 481.431 88.0322 480.851 87.8069C480.304 87.5817 480.031 87.2117 480.031 86.6968C480.031 86.3107 480.256 85.7959 480.707 85.1523L494.607 65.0257L481.72 45.9126C481.302 45.2691 481.093 44.7703 481.093 44.4164C481.093 43.9015 481.382 43.5315 481.962 43.3063C482.541 43.081 483.538 42.9684 484.954 42.9684H485.775C486.74 42.9684 487.512 43.0649 488.091 43.258C488.67 43.4189 489.137 43.7568 489.491 44.2716L497.648 56.4827C498.13 57.255 498.71 58.2685 499.385 59.5234C499.514 59.2982 499.739 58.9121 500.061 58.3651C500.383 57.8181 500.769 57.1906 501.219 56.4827L509.425 44.1268C509.939 43.3545 511.226 42.9684 513.286 42.9684H513.624C514.943 42.9684 515.876 43.081 516.423 43.3063C516.97 43.5315 517.244 43.9015 517.244 44.4164C517.244 44.8025 517.018 45.3012 516.568 45.9126L503.633 64.7844L517.485 85.1523C517.968 85.8602 518.209 86.3751 518.209 86.6968C518.209 87.1795 517.903 87.5495 517.292 87.8069C516.68 88.0322 515.667 88.1448 514.251 88.1448H513.479C512.481 88.1448 511.693 88.0644 511.114 87.9035C510.567 87.7104 510.132 87.3565 509.811 86.8416L500.689 73.2308C500.174 72.4586 499.772 71.815 499.482 71.3002C499.192 70.7532 498.999 70.3992 498.903 70.2383C498.838 70.3671 498.645 70.7049 498.324 71.2519C498.034 71.7668 497.616 72.4264 497.069 73.2308L487.85 86.9382C487.303 87.7426 486.016 88.1448 483.989 88.1448H483.699Z"
        fill="#7B00FF"
      />
      <path
        d="M157.86 105.858C155.543 105.858 154.385 105.231 154.385 103.976V56.1449C154.385 52.4123 154.208 49.7256 153.854 48.0845C153.5 46.4113 153.323 45.4943 153.323 45.3334C153.323 44.6255 153.854 44.1268 154.916 43.8372C156.01 43.5154 157.039 43.3545 158.005 43.3545C158.809 43.3545 159.404 43.7889 159.79 44.6577C160.176 45.5265 160.45 46.4113 160.611 47.3123C160.804 48.2133 160.933 48.7924 160.997 49.0499C165.083 44.7703 169.636 42.6306 174.656 42.6306C178.099 42.6306 181.075 43.612 183.585 45.5747C186.095 47.5375 188.009 50.2565 189.329 53.7316C190.648 57.2067 191.308 61.1645 191.308 65.6049C191.308 70.4314 190.568 74.5661 189.087 78.0091C187.639 81.452 185.596 84.0583 182.958 85.8281C180.319 87.5978 177.278 88.4827 173.836 88.4827C171.358 88.4827 169.154 88.1126 167.223 87.3726C165.325 86.6325 163.442 85.5546 161.576 84.1388V103.976C161.576 105.231 160.45 105.858 158.198 105.858H157.86ZM172.195 82.1599C176.024 82.0634 178.903 80.6637 180.834 77.9608C182.765 75.2579 183.73 71.3324 183.73 66.1841C183.73 60.6496 182.813 56.3862 180.979 53.3937C179.177 50.3691 176.571 48.8568 173.16 48.8568C171.261 48.8568 169.283 49.3716 167.223 50.4013C165.196 51.4309 163.314 52.895 161.576 54.7934V78.2987C164.729 80.8728 168.269 82.1599 172.195 82.1599Z"
        fill="#F1BEB5"
      />
      <g filter="url(#filter0_d_0_1)">
        <rect x="28" y="12" width="71" height="102" fill="#F1BEB5" />
      </g>
      <rect x="28" y="103" width="18" height="25" fill="#F1BEB5" />
      <g filter="url(#filter1_i_0_1)">
        <rect x="46" y="28" width="36" height="70" fill="#0F1523" />
      </g>
      <defs>
        <filter
          id="filter0_d_0_1"
          x="15"
          y="0"
          width="103"
          height="134"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="3" dy="4" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.63 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_i_0_1"
          x="46"
          y="28"
          width="36"
          height="74"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="3.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.66 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1" />
        </filter>
      </defs>
    </svg>
  );
}
function Logo() {
  const colorScheme = useComputedColorScheme();
  return (
    <>
      {colorScheme === "dark" && <DarkLogo />}
      {colorScheme === "light" && <LightLogo />}
    </>
  );
}

export default Logo;
