import Vue from "vue";
import { ZoomMtg } from "@zoomus/websdk";

ZoomMtg.setZoomJSLib("https://source.zoom.us/1.7.7/lib", "/av");
ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

const MeetingCfg = (meetingNumber, passWord) => ({
  apiKey: "YIxLi9cLRkqJyi2Q4DXSww",
  apiSecret: "nI477TgAQ9GkETshN5cYwuMhcBMAoNJ2sJ9E",
  meetingNumber,
  userName: "Joe",
  passWord,
  role: 0,
});

Vue.prototype.$ZoomMtg = ZoomMtg;
Vue.prototype.$MeetingCfg = MeetingCfg;
