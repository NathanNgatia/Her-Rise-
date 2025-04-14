<template>
    <div 
      class="icon-container" 
      :style="{ backgroundColor: bgColor, width: size + 'px', height: size + 'px' }"
      role="img" 
      aria-label="Empowerment icon"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        :fill="iconColor" 
        class="icon"
        :style="{ width: iconSize + 'px', height: iconSize + 'px' }"
        aria-hidden="true"
      >
        <path d="M12 2a4 4 0 0 1 4 4 4 4 0 0 1-3 3.87V12h2a1 1 0 0 1 0 2h-2v3h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-3H9a1 1 0 0 1 0-2h2V9.87A4 4 0 0 1 8 6a4 4 0 0 1 4-4zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-6 9a3 3 0 0 1 6 0v1h-2v-1a1 1 0 1 0-2 0v1H6v-1zm12 0a3 3 0 0 1 3 3v1h-2v-1a1 1 0 1 0-2 0v1h-2v-1a3 3 0 0 1 3-3z"/>
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    name: "EmpowermentIcon",
    props: {
      size: {
        type: Number,
        default: 50
      },
      iconSize: {
        type: Number,
        default: 24
      },
      bgColor: {
        type: String,
        default: "#f8b400"
      },
      iconColor: {
        type: String,
        default: "white"
      }
    }
  };
  </script>
  
  <style scoped>
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .icon {
    display: block;
  }
  </style>
  