import React from 'react';
import Svg, { Rect, Path, Mask, G, Defs, LinearGradient, Stop } from 'react-native-svg';
import { View } from 'react-native';

const GoPro = () => {
  return (
    <View>
      <Svg width={65} height={24} viewBox="0 0 65 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect
          x={0.5}
          y={0.5}
          width={64}
          height={23}
          rx={11.5}
          stroke="url(#paint0_linear_166_66)"
        />
        <Path
          d="M16.016 10.636C16.232 10.26 16.552 9.948 16.976 9.7C17.408 9.444 17.908 9.316 18.476 9.316C19.06 9.316 19.588 9.456 20.06 9.736C20.54 10.016 20.916 10.412 21.188 10.924C21.46 11.428 21.596 12.016 21.596 12.688C21.596 13.352 21.46 13.944 21.188 14.464C20.916 14.984 20.54 15.388 20.06 15.676C19.588 15.964 19.06 16.108 18.476 16.108C17.916 16.108 17.42 15.984 16.988 15.736C16.564 15.48 16.24 15.164 16.016 14.788V19.12H14.924V9.424H16.016V10.636ZM20.48 12.688C20.48 12.192 20.38 11.76 20.18 11.392C19.98 11.024 19.708 10.744 19.364 10.552C19.028 10.36 18.656 10.264 18.248 10.264C17.848 10.264 17.476 10.364 17.132 10.564C16.796 10.756 16.524 11.04 16.316 11.416C16.116 11.784 16.016 12.212 16.016 12.7C16.016 13.196 16.116 13.632 16.316 14.008C16.524 14.376 16.796 14.66 17.132 14.86C17.476 15.052 17.848 15.148 18.248 15.148C18.656 15.148 19.028 15.052 19.364 14.86C19.708 14.66 19.98 14.376 20.18 14.008C20.38 13.632 20.48 13.192 20.48 12.688ZM24.1254 10.492C24.3174 10.116 24.5894 9.824 24.9414 9.616C25.3014 9.408 25.7374 9.304 26.2494 9.304V10.432H25.9614C24.7374 10.432 24.1254 11.096 24.1254 12.424V16H23.0334V9.424H24.1254V10.492ZM30.3779 16.108C29.7619 16.108 29.2019 15.968 28.6979 15.688C28.2019 15.408 27.8099 15.012 27.5219 14.5C27.2419 13.98 27.1019 13.38 27.1019 12.7C27.1019 12.028 27.2459 11.436 27.5339 10.924C27.8299 10.404 28.2299 10.008 28.7339 9.736C29.2379 9.456 29.8019 9.316 30.4259 9.316C31.0499 9.316 31.6139 9.456 32.1179 9.736C32.6219 10.008 33.0179 10.4 33.3059 10.912C33.6019 11.424 33.7499 12.02 33.7499 12.7C33.7499 13.38 33.5979 13.98 33.2939 14.5C32.9979 15.012 32.5939 15.408 32.0819 15.688C31.5699 15.968 31.0019 16.108 30.3779 16.108ZM30.3779 15.148C30.7699 15.148 31.1379 15.056 31.4819 14.872C31.8259 14.688 32.1019 14.412 32.3099 14.044C32.5259 13.676 32.6339 13.228 32.6339 12.7C32.6339 12.172 32.5299 11.724 32.3219 11.356C32.1139 10.988 31.8419 10.716 31.5059 10.54C31.1699 10.356 30.8059 10.264 30.4139 10.264C30.0139 10.264 29.6459 10.356 29.3099 10.54C28.9819 10.716 28.7179 10.988 28.5179 11.356C28.3179 11.724 28.2179 12.172 28.2179 12.7C28.2179 13.236 28.3139 13.688 28.5059 14.056C28.7059 14.424 28.9699 14.7 29.2979 14.884C29.6259 15.06 29.9859 15.148 30.3779 15.148Z"
          fill="white"
        />
        <Mask id="mask0_166_66" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={35} y={4} width={16} height={16}>
          <Rect x={35} y={4} width={16} height={16} fill="#D9D9D9" />
        </Mask>
        <G mask="url(#mask0_166_66)">
          <Path
            d="M38.3335 17.3335V16.0002H47.6668V17.3335H38.3335ZM38.3335 15.0002L37.4835 9.65016C37.4613 9.65016 37.4363 9.65294 37.4085 9.6585C37.3807 9.66405 37.3557 9.66683 37.3335 9.66683C37.0557 9.66683 36.8196 9.56961 36.6252 9.37516C36.4307 9.18072 36.3335 8.94461 36.3335 8.66683C36.3335 8.38905 36.4307 8.15294 36.6252 7.9585C36.8196 7.76405 37.0557 7.66683 37.3335 7.66683C37.6113 7.66683 37.8474 7.76405 38.0418 7.9585C38.2363 8.15294 38.3335 8.38905 38.3335 8.66683C38.3335 8.74461 38.3252 8.81683 38.3085 8.8835C38.2918 8.95016 38.2724 9.01127 38.2502 9.06683L40.3335 10.0002L42.4168 7.15016C42.2946 7.06127 42.1946 6.94461 42.1168 6.80016C42.0391 6.65572 42.0002 6.50016 42.0002 6.3335C42.0002 6.05572 42.0974 5.81961 42.2918 5.62516C42.4863 5.43072 42.7224 5.3335 43.0002 5.3335C43.2779 5.3335 43.5141 5.43072 43.7085 5.62516C43.9029 5.81961 44.0002 6.05572 44.0002 6.3335C44.0002 6.50016 43.9613 6.65572 43.8835 6.80016C43.8057 6.94461 43.7057 7.06127 43.5835 7.15016L45.6668 10.0002L47.7502 9.06683C47.7279 9.01127 47.7085 8.95016 47.6918 8.8835C47.6752 8.81683 47.6668 8.74461 47.6668 8.66683C47.6668 8.38905 47.7641 8.15294 47.9585 7.9585C48.1529 7.76405 48.3891 7.66683 48.6668 7.66683C48.9446 7.66683 49.1807 7.76405 49.3752 7.9585C49.5696 8.15294 49.6668 8.38905 49.6668 8.66683C49.6668 8.94461 49.5696 9.18072 49.3752 9.37516C49.1807 9.56961 48.9446 9.66683 48.6668 9.66683C48.6446 9.66683 48.6196 9.66405 48.5918 9.6585C48.5641 9.65294 48.5391 9.65016 48.5168 9.65016L47.6668 15.0002H38.3335ZM39.4668 13.6668H46.5335L46.9668 10.8835L45.2168 11.6502L43.0002 8.60016L40.7835 11.6502L39.0335 10.8835L39.4668 13.6668Z"
            fill="#FFCC00"
          />
        </G>
        <Defs>
          <LinearGradient
            id="paint0_linear_166_66"
            x1={0}
            y1={12}
            x2={65}
            y2={12}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#954EDD" />
            <Stop offset={1} stopColor="#CD6AAB" />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
};

export default GoPro;