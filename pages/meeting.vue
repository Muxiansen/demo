<template>
  <div>
    <p>Hi from {{ name }}</p>
    <div>
      这里嵌入会议视频
    </div>
    <Zoom />
    <br />
    <NLink to="/">Home page</NLink>
  </div>
</template>

<script>
import Zoom from "../components/zoom.vue";

export default {
  components: {
    Zoom,
  },
  asyncData() {
    return {
      name: process.static ? "static" : process.server ? "server" : "client",
    };
  },
  head: {
    title: "Meeting page",
  },
};
</script>
