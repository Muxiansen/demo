<template>
  <div></div>
</template>

<script>
export default {
  // Join Zoom Meeting
  // https://us04web.zoom.us/j/74399352277?pwd=Y3ZKeDBmWGxHTzhTTWlMVmZ2VHlRUT09

  // Meeting ID: 74399352277
  // Password: 1ufajs

  mounted() {
    if (!this.$MeetingCfg) return;

    const meetConfig = this.$MeetingCfg("74399352277", "1ufajs");
    const ZoomMtg = this.$ZoomMtg;

    const signature = ZoomMtg.generateSignature({
      meetingNumber: meetConfig.meetingNumber,
      apiKey: meetConfig.apiKey,
      apiSecret: meetConfig.apiSecret,
      role: meetConfig.role,
      success: function(res) {
        console.log("success signature: " + res.result);
      },
    });

    ZoomMtg.init({
      leaveUrl: this.$route.fullPath,
      isSupportAV: true,
      success: () => {
        ZoomMtg.join({
          meetingNumber: meetConfig.meetingNumber,
          userName: meetConfig.userName,
          signature: signature,
          apiKey: meetConfig.apiKey,
          userEmail: "email@gmail.com",
          passWord: meetConfig.passWord,
          success: function(res) {
            console.log("join meeting success");
          },
          error: function(res) {
            console.log(res);
          },
        });
      },
      error: function(res) {
        console.log(res);
      },
    });
  },
};
</script>
