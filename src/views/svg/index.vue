<template>
  <div class="svg">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%">
      <defs>
        <!-- x/y:渐变开始的位置 x/y  -->
        <linearGradient id="grd1" x1="30%" y1="20%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="yellow" />
          <stop offset="50%" stop-color="green" />
          <stop offset="100%" stop-color="red" />
        </linearGradient>
      </defs>
      <!-- rx/ry：轴圆角值  x/y：位置 cx/cy:中心坐标 -->
      <rect rx="20" ry="5" width="40" height="40" fill="blue" fill-opacity="0.5" />
      <circle cx="70" cy="20" r="20" fill="red" fill-opacity="0.5"  />
      <ellipse cx="130" cy="20" rx="30" ry="20" fill="url(#grd1)" />
      <line x1="0" y1="20" x2="170" y2="20" stroke="black" stroke-dasharray="3,1" stroke-width="2"/>
      <!-- fill-rule:noneZero/evenodd -->
      <polygon points="190,0 180,40 208,16 172,16 200,40" fill="red" fill-rule="evenodd" />
      <polyline points="220,0 248,0 215,7 217,25 219,7 252,7 250,25 218,12 251,12 218,18 251,18 234,7 234,23 218,26 220,44 222,26 250,26 248,44 218,35 249,35 220,44 248,44 234,26 234,44" fill="none" stroke="black" stroke-width="1" />
      <path d="M277 15 m-20 2 l2 20 l36 0 l2 -20 l-40 0 m0 10 l40 0 m-20 10 l0 -29" fill="none" stroke="black" />
      <text x="150" y="18" fill="black" transform="scale(2,2)">荣</text>
      <g>
        <polygon points="80,54 130,54 130,90 80,90" fill="none" stroke="black" stroke-width="4" />
        <polygon points="85,85 96,60 108,78 118,72 125,85" fill="black" stroke="black" stroke-width="2" />
        <circle cx="120" cy="63" r="4" fill="black" />
      </g>
      <g fill="black">
        <ellipse cx="20" cy="90" rx="8" ry="6" />
        <line x1="28" y1="90" x2="28" y2="64" stroke="black" stroke-width="2" />
        <ellipse cx="45" cy="85" rx="8" ry="6" />
        <line x1="53" y1="85" x2="53" y2="56" stroke="black" stroke-width="2" />
        <line x1="28" y1="66" x2="53" y2="61" stroke="black" stroke-width="10" />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'svg',
  data () {
    return {
    }
  }
}
</script>

<style></style>
