
interface Props {
    type?: "underlined" | "highlighted"
    variation?: 1 | 2 | 3 | 4
    className?: string
}

export const Decoration = ({ type = "underlined", variation = 1, className }: Props) => {

    if (type === "underlined" && variation === 1) {
        return (
            <svg width="274" height="15" viewBox="0 0 274 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M272.238 8.90703C218.268 1.05767 163.385 5.39925 109.279 3.98596C73.5008 3.04038 37.7204 0.762796 1.96852 0.000228063C0.896628 -0.0201071 0.0150621 1.32197 0.000174667 3.00979C-0.0140655 4.69761 0.844218 6.08044 1.91547 6.10077C37.6635 6.86334 73.4399 9.14092 109.214 10.0865C163.223 11.4998 218.002 7.14802 271.875 14.9872C272.943 15.1397 273.888 13.9095 273.992 12.2318C274.089 10.5542 273.299 9.06971 272.238 8.90703Z" fill="black" className={className} />
            </svg>
        )
    }
    if (type === "underlined" && variation === 2) {
        return (
            <svg width="447" height="30" viewBox="0 0 447 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M189.622 3.576C168.647 4.50823 147.918 5.6545 127.703 6.90766C99.0876 8.68043 70.4829 10.5143 42.0507 13.418C33.1009 14.3349 24.0123 14.9157 15.1184 16.0618C9.53536 16.7801 2.13241 17.8039 1.16087 18.0178C0.652709 18.1401 0.431017 18.3237 0.359383 18.3848C-0.144298 18.8127 -0.0523948 19.2252 0.231905 19.5461C0.346072 19.6836 0.634768 20.02 1.43618 20.0658C55.0323 23.1987 109.837 17.0858 163.498 16.4439C256.556 15.3436 352.434 19.7143 444.753 29.2506C445.559 29.327 446.343 28.9448 446.455 28.3794C446.589 27.8292 446.007 27.2943 445.201 27.2179C352.725 17.6664 256.69 13.2803 163.453 14.3959C113.444 14.9919 62.4464 20.3562 12.3672 18.5223C13.5178 18.3695 14.6461 18.2166 15.6758 18.079C24.5339 16.9329 33.5845 16.3674 42.4985 15.4505C70.8702 12.5468 99.4167 10.7129 127.994 8.95546C163.453 6.75478 200.457 4.85975 237.752 3.97336C251.094 4.1109 264.391 4.24851 277.688 4.41661C306.454 4.78339 335.354 5.85317 364.053 7.28972C372.694 7.73291 381.334 8.19135 389.975 8.58869C392.841 8.72624 400.228 9.12351 401.258 9.09295C402.534 9.06238 402.78 8.32889 402.802 8.20663C402.869 7.93155 402.825 7.54946 402.198 7.22853C402.131 7.18269 401.728 7.02976 400.832 6.93807C348.651 1.52808 292.933 0.626557 237.797 1.92557C179.638 1.36012 121.256 1.11548 63.2457 0.855682C62.4151 0.855682 61.7368 1.31422 61.7301 1.87967C61.7257 2.44512 62.3949 2.90368 63.2254 2.91896C105.23 3.10235 147.448 3.28564 189.622 3.576Z" fill="white" className={className} />
            </svg>
        )
    }
    if (type === "underlined" && variation === 3) {
        return (
            <svg width="447" height="41" viewBox="0 0 447 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M267.516 18.7263C208.028 19.4545 148.511 22.3433 89.2821 27.507C61.1229 29.9624 28.4217 29.6555 1.1108 38.0268C-0.25003 38.4481 0.00913569 39.7119 0.0385909 39.8383C0.0975013 40.0971 0.344988 40.9577 1.42894 40.9998C1.54676 41.0058 2.37734 40.8854 2.69546 40.8433C10.7603 39.76 18.7957 38.4963 26.8664 37.4732C54.7311 33.9285 82.6782 31.2504 110.667 28.9032C147.815 25.7858 185.283 24.1247 222.532 22.8248C242.92 22.1146 263.798 23.0595 284.252 21.591C291.763 21.5489 299.274 21.543 306.785 21.5671C338.185 21.6814 369.548 22.8971 400.895 24.5641C410.974 25.0998 418.662 25.6775 428.53 26.0687C432.276 26.2191 438.22 26.3215 442.356 26.3877C442.963 26.3997 444.512 26.4116 445.154 26.4176C445.219 26.4297 445.284 26.4297 445.354 26.4297C445.602 26.4297 445.72 26.4116 445.743 26.4116C447.145 26.201 447.016 24.8469 446.98 24.6423C446.974 24.6002 446.762 23.4567 445.555 23.4146C445.266 23.4025 443.198 23.3906 442.403 23.3786C438.291 23.3124 432.371 23.21 428.642 23.0656C418.792 22.6744 411.11 22.0967 401.048 21.561C369.654 19.894 338.243 18.6723 306.797 18.558C302.956 18.5459 299.109 18.5399 295.268 18.5459C295.139 18.2029 294.85 17.8177 294.214 17.6492C293.619 17.4927 289.36 17.3543 287.716 17.2159C275.551 16.1928 275.91 16.241 262.526 15.4044C242.255 14.1346 239.168 13.8456 218.084 13.3099C179.786 12.335 141.471 12.4133 103.167 12.5096C84.257 12.5638 64.0094 13.8697 44.8105 11.4323C51.1375 10.674 57.4881 10.1204 63.8268 9.48846C85.4705 7.33394 107.132 5.99783 128.864 5.05899C180.994 2.80817 233.206 1.91153 285.318 4.98082C274.225 5.08915 263.139 5.34184 252.046 5.50433C206.891 6.17837 161.3 5.67289 116.239 9.16948C115.432 9.23568 114.826 9.95782 114.885 10.7823C114.943 11.6128 115.656 12.2327 116.463 12.1726C161.465 8.67598 206.991 9.18748 252.087 8.51344C268.841 8.26669 285.589 7.82138 302.343 7.95379C308.093 8.00193 313.843 8.21862 319.592 8.29084C320.729 8.3089 323.657 8.53759 324.076 8.4413C325 8.23066 325.201 7.5325 325.259 7.18946C325.289 6.98484 325.383 5.80527 323.969 5.38399C314.32 2.50728 296.511 2.63969 287.133 2.07397C234.378 -1.11568 181.518 -0.225011 128.74 2.04988C106.955 2.99474 85.2408 4.33688 63.5382 6.49742C55.9564 7.2497 48.357 7.89966 40.8047 8.89869C39.5852 9.06118 36.8459 9.29593 35.5204 9.54268C34.9666 9.64499 34.566 9.78933 34.3893 9.89163C33.7 10.2888 33.5763 10.8666 33.5763 11.2578C33.5704 11.5587 33.6942 12.6179 35.1375 12.9068C57.1287 17.3061 81.0582 15.5789 103.173 15.5187C141.453 15.4224 179.739 15.3441 218.013 16.3191C239.044 16.8547 242.119 17.1377 262.349 18.4075C264.346 18.5279 266.037 18.6361 267.516 18.7263Z" fill="black" className={className} />
            </svg>
        )
    }
    if (type === "underlined" && variation === 4) {
        return (
            <svg width="294" height="35" viewBox="0 0 294 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M134.964 5.09741C133.904 5.15766 132.845 5.22262 131.786 5.28287C117.752 5.84369 103.713 6.51572 89.6601 7.34536C80.8335 7.86447 74.6872 8.25843 69.6315 8.61995C46.7691 9.83892 23.9623 11.6002 1.3136 14.0845C0.89739 14.1308 0.686487 14.2142 0.660069 14.2281C0.0612443 14.5108 0.00979869 14.9975 0.000992448 15.2339C-0.0105947 15.5676 0.0723729 16.0078 0.618823 16.2998C0.684175 16.3323 0.829718 16.4111 1.07954 16.4296C1.18197 16.4389 2.42595 16.3509 4.7786 16.1702C4.65346 16.4297 4.6479 16.6799 4.69518 16.907C4.74245 17.1295 4.94965 17.7784 5.82193 17.8479C6.52828 17.9035 11.4218 17.199 13.3221 17.0136C19.9189 16.374 26.5069 15.6371 33.1083 15.0438C43.4362 14.1122 53.7714 13.2687 64.1081 12.4484C71.155 11.8829 78.2023 11.3313 85.2528 10.7937C94.1073 10.2375 102.965 9.72299 111.826 9.25951C137.286 8.56891 162.746 8.4113 188.061 8.53644C218.23 8.68939 248.556 8.44374 278.529 12.0079L277.037 12.0636L276.504 12.0822C263.461 10.8864 247.772 11.8133 236.723 11.7021C189.146 11.2293 142.325 12.7727 94.9304 16.5641C76.3284 18.0565 57.7366 20.1376 39.2337 22.5245C32.8344 23.3542 16.2175 25.3054 13.9552 26.0331C13.1825 26.2787 12.9744 26.8117 12.9295 26.9971C12.8618 27.2752 12.891 27.5441 13.0231 27.8082C13.1089 27.9797 13.2544 28.1791 13.539 28.332C13.6474 28.3923 13.844 28.471 14.1512 28.5127C14.4321 28.5498 14.9318 28.5731 15.6817 28.5731C76.1305 28.3274 136.349 21.1943 196.696 18.1353C218.967 17.0044 241.237 15.9338 263.512 14.8909C267.874 14.687 272.24 14.5526 276.606 14.395C277.524 14.483 278.423 14.5803 279.308 14.6916L269.278 15.22C249.288 16.2721 229.354 17.7645 209.4 19.4053C163.191 23.2012 117.193 29.5185 70.9436 32.6841C70.3058 32.7305 69.8233 33.282 69.8669 33.9216C69.9105 34.5612 70.4644 35.0433 71.1021 34.9969C117.361 31.8313 163.372 25.5094 209.59 21.7134C229.52 20.0773 249.432 18.5849 269.399 17.5328C276.499 17.162 286.441 16.6382 288.337 16.5316C288.564 16.5177 288.694 16.5085 288.717 16.5039C289.264 16.4436 289.458 16.1191 289.486 16.082C289.769 15.7344 289.792 15.3775 289.704 15.0484C289.648 14.8445 289.505 14.4181 288.916 14.242C288.759 14.1956 288.601 14.1493 288.439 14.1076C290.181 14.0797 291.637 14.0427 292.04 13.95C292.893 13.7507 293.027 13.0925 293.046 12.8515C293.064 12.5966 293.013 12.3232 292.809 12.0543C292.726 11.9431 292.587 11.7948 292.337 11.6743C292.212 11.6186 291.929 11.5259 291.433 11.4471C275.48 8.93042 259.406 7.66518 243.286 7.00703L253.283 7.08578C253.422 7.08578 253.487 7.08115 253.501 7.08115C254.09 7.03016 254.294 6.66863 254.34 6.60374C254.562 6.2932 254.604 5.97338 254.525 5.65821C254.521 5.63504 254.391 5.01858 253.77 4.82391L260.254 4.74052C261.57 4.72661 262.224 4.70815 262.34 4.69888C262.91 4.64326 263.114 4.30945 263.156 4.25383C263.429 3.91085 263.457 3.55396 263.355 3.20635C263.313 3.06267 263.169 2.54357 262.47 2.40453C262.433 2.39526 262.252 2.37216 261.937 2.36753C259.058 2.31654 238.285 2.35818 230.294 2.40453C217.46 2.47869 204.622 2.55754 191.788 2.81709C182.458 3.00249 173.137 3.29442 163.817 3.67448C137.585 3.04413 111.38 1.97352 85.4878 0.00370003C84.85 -0.0472835 84.2929 0.434765 84.2443 1.06974C84.1961 1.70935 84.6744 2.26551 85.3117 2.31649C101.762 3.56327 118.337 4.4578 134.964 5.09741ZM233.59 13.9917C187.153 13.6163 141.409 15.169 95.1153 18.8769C76.5504 20.36 57.9961 22.4411 39.5303 24.8234C37.1517 25.134 33.3373 25.5928 29.3934 26.0841C85.1977 24.9532 140.834 18.6452 196.58 15.8179C208.914 15.1922 221.252 14.5849 233.59 13.9917Z" fill="black" className={className} />
            </svg>

        )
    }

    if (type === "highlighted" && variation === 1) {
        return (
            <svg width="89" height="113" viewBox="0 0 89 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M84.6197 31.6024C84.2747 27.3869 83.9704 23.2136 83.5027 19.0104C83.4054 18.1058 82.5977 17.4578 81.6992 17.5573C80.7946 17.6547 80.1443 18.4685 80.2438 19.3669C80.7057 23.5472 81.0086 27.6851 81.35 31.8714C81.4266 32.7757 82.2194 33.4465 83.1153 33.3739C84.0195 33.2973 84.6963 32.5066 84.6197 31.6024Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M55.839 51.4837C46.2722 42.1509 36.2398 33.3074 26.4803 24.1848C25.8152 23.5664 24.7788 23.6032 24.1626 24.2621C23.5442 24.9272 23.5749 25.9612 24.2378 26.5858C33.9831 35.6895 44.0013 44.5139 53.5455 53.8317C54.1979 54.4665 55.2338 54.4506 55.8664 53.8045C56.5012 53.1521 56.4851 52.1163 55.839 51.4837Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M36.8201 95.755C25.7064 93.7199 14.5185 91.9926 3.42785 89.8334C2.54059 89.6654 1.68107 90.245 1.50688 91.1301C1.3305 92.0213 1.9163 92.8831 2.80136 93.0573C13.9066 95.2147 25.1069 96.9463 36.2352 98.9796C37.1246 99.1414 37.9803 98.5535 38.1421 97.664C38.3061 96.7684 37.7157 95.919 36.8201 95.755Z" fill="black" className={className} />
            </svg>
        )
    }
    if (type === "highlighted" && variation === 2) {
        return (
            <svg width="55" height="58" viewBox="0 0 55 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M38.0006 7.61315C42.3786 9.4723 47.0524 10.7347 51.5908 11.925C52.5687 12.178 53.5814 11.6178 53.7788 10.6668C54.0474 9.72433 53.4526 8.75181 52.5457 8.50813C48.1465 7.35829 43.6108 6.15049 39.4395 4.36642C38.5512 3.98163 37.4854 4.3927 37.0786 5.28765C36.672 6.1819 37.1123 7.22766 38.0006 7.61315Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8733 23.6765C28.215 32.0187 35.6047 39.5325 41.7783 48.054C42.3241 48.8459 43.4551 49.0333 44.2521 48.4662C45.0492 47.8983 45.2663 46.7955 44.6495 45.9944C38.4788 37.4511 31.0918 29.9162 24.7531 21.5522C24.134 20.7679 22.9996 20.6086 22.2001 21.1947C21.4717 21.7895 21.2543 22.8922 21.8733 23.6765Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.43227 50.2561C4.77532 46.0045 5.11878 41.7529 5.46192 37.5005C5.58929 36.533 4.8352 35.6738 3.83499 35.59C2.83468 35.5069 2.01667 36.237 1.88921 37.2051C1.54523 41.4638 1.20094 45.7217 0.857061 49.9797C0.800695 50.9565 1.55515 51.8108 2.55611 51.889C3.48606 51.9579 4.376 51.2322 4.43227 50.2561Z" fill="black" className={className} />
            </svg>
        )
    }
    if (type === "highlighted" && variation === 3) {
        return (
            <svg width="294" height="35" viewBox="0 0 294 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M134.964 5.09741C133.904 5.15766 132.845 5.22262 131.786 5.28287C117.752 5.84369 103.713 6.51572 89.6601 7.34536C80.8335 7.86447 74.6872 8.25843 69.6315 8.61995C46.7691 9.83892 23.9623 11.6002 1.3136 14.0845C0.89739 14.1308 0.686487 14.2142 0.660069 14.2281C0.0612443 14.5108 0.00979869 14.9975 0.000992448 15.2339C-0.0105947 15.5676 0.0723729 16.0078 0.618823 16.2998C0.684175 16.3323 0.829718 16.4111 1.07954 16.4296C1.18197 16.4389 2.42595 16.3509 4.7786 16.1702C4.65346 16.4297 4.6479 16.6799 4.69518 16.907C4.74245 17.1295 4.94965 17.7784 5.82193 17.8479C6.52828 17.9035 11.4218 17.199 13.3221 17.0136C19.9189 16.374 26.5069 15.6371 33.1083 15.0438C43.4362 14.1122 53.7714 13.2687 64.1081 12.4484C71.155 11.8829 78.2023 11.3313 85.2528 10.7937C94.1073 10.2375 102.965 9.72299 111.826 9.25951C137.286 8.56891 162.746 8.4113 188.061 8.53644C218.23 8.68939 248.556 8.44374 278.529 12.0079L277.037 12.0636L276.504 12.0822C263.461 10.8864 247.772 11.8133 236.723 11.7021C189.146 11.2293 142.325 12.7727 94.9304 16.5641C76.3284 18.0565 57.7366 20.1376 39.2337 22.5245C32.8344 23.3542 16.2175 25.3054 13.9552 26.0331C13.1825 26.2787 12.9744 26.8117 12.9295 26.9971C12.8618 27.2752 12.891 27.5441 13.0231 27.8082C13.1089 27.9797 13.2544 28.1791 13.539 28.332C13.6474 28.3923 13.844 28.471 14.1512 28.5127C14.4321 28.5498 14.9318 28.5731 15.6817 28.5731C76.1305 28.3274 136.349 21.1943 196.696 18.1353C218.967 17.0044 241.237 15.9338 263.512 14.8909C267.874 14.687 272.24 14.5526 276.606 14.395C277.524 14.483 278.423 14.5803 279.308 14.6916L269.278 15.22C249.288 16.2721 229.354 17.7645 209.4 19.4053C163.191 23.2012 117.193 29.5185 70.9436 32.6841C70.3058 32.7305 69.8233 33.282 69.8669 33.9216C69.9105 34.5612 70.4644 35.0433 71.1021 34.9969C117.361 31.8313 163.372 25.5094 209.59 21.7134C229.52 20.0773 249.432 18.5849 269.399 17.5328C276.499 17.162 286.441 16.6382 288.337 16.5316C288.564 16.5177 288.694 16.5085 288.717 16.5039C289.264 16.4436 289.458 16.1191 289.486 16.082C289.769 15.7344 289.792 15.3775 289.704 15.0484C289.648 14.8445 289.505 14.4181 288.916 14.242C288.759 14.1956 288.601 14.1493 288.439 14.1076C290.181 14.0797 291.637 14.0427 292.04 13.95C292.893 13.7507 293.027 13.0925 293.046 12.8515C293.064 12.5966 293.013 12.3232 292.809 12.0543C292.726 11.9431 292.587 11.7948 292.337 11.6743C292.212 11.6186 291.929 11.5259 291.433 11.4471C275.48 8.93042 259.406 7.66518 243.286 7.00703L253.283 7.08578C253.422 7.08578 253.487 7.08115 253.501 7.08115C254.09 7.03016 254.294 6.66863 254.34 6.60374C254.562 6.2932 254.604 5.97338 254.525 5.65821C254.521 5.63504 254.391 5.01858 253.77 4.82391L260.254 4.74052C261.57 4.72661 262.224 4.70815 262.34 4.69888C262.91 4.64326 263.114 4.30945 263.156 4.25383C263.429 3.91085 263.457 3.55396 263.355 3.20635C263.313 3.06267 263.169 2.54357 262.47 2.40453C262.433 2.39526 262.252 2.37216 261.937 2.36753C259.058 2.31654 238.285 2.35818 230.294 2.40453C217.46 2.47869 204.622 2.55754 191.788 2.81709C182.458 3.00249 173.137 3.29442 163.817 3.67448C137.585 3.04413 111.38 1.97352 85.4878 0.00370003C84.85 -0.0472835 84.2929 0.434765 84.2443 1.06974C84.1961 1.70935 84.6744 2.26551 85.3117 2.31649C101.762 3.56327 118.337 4.4578 134.964 5.09741ZM233.59 13.9917C187.153 13.6163 141.409 15.169 95.1153 18.8769C76.5504 20.36 57.9961 22.4411 39.5303 24.8234C37.1517 25.134 33.3373 25.5928 29.3934 26.0841C85.1977 24.9532 140.834 18.6452 196.58 15.8179C208.914 15.1922 221.252 14.5849 233.59 13.9917Z" fill="black" className={className} />
            </svg>
        )
    }

}