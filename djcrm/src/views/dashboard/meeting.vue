<template>
  <div>
    <h1>Zoom Meeting SDK Sample Vue.js 2</h1>
    <button @click="getSignature">Join Meeting</button>
  </div>
</template>
<script>
import axios from 'axios';
import ZoomMtg from '@zoomus/websdk';

export default{
    name:'meeting',
    created () {
    ZoomMtg.setZoomJSLib('https://source.zoom.us/2.13.0/lib', '/av');
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareWebSDK();
    // loads language files, also passes any error messages to the ui
    ZoomMtg.i18n.load('en-US');
    ZoomMtg.i18n.reload('en-US');
  },
  mounted() {
    ZoomMtg.inMeetingServiceListener("onUserJoin", (data) => {
      console.log("inMeetingServiceListener onUserJoin", data);
    });
  },
  data () {
    return {
      authEndpoint: "",
      sdkKey: "MUTtl0WC25geJdh1W0awSEYUbgW5Qm8X",
      meetingNumber: "84330561156",
      passWord: "impj53",
      role: 0,
      userName: "Ajay",
      userEmail: "",
      registrantToken: '',
      zakToken: '',
      leaveUrl: "http://localhost:8080"
    }
  },
  methods: {
    getSignature() {
      axios.post(this.authEndpoint, {
        meetingNumber: this.meetingNumber,
        role: this.role
      })
      .then(res => {
        console.log(res.data.signature);
        this.startMeeting(res.data.signature);
      })
      .catch(error => {
        console.log(error);
      });
    },
    startMeeting(signature) {
      document.getElementById("zmmtg-root").style.display = "block";

      ZoomMtg.init({
        leaveUrl: this.leaveUrl,
        success: (success) => {
          console.log(success);
          ZoomMtg.join({
            signature: signature,
            sdkKey: this.sdkKey,
            meetingNumber: this.meetingNumber,
            passWord: this.passWord,
            userName: this.userName,
            userEmail: this.userEmail,
            tk: this.registrantToken,
            zak: this.zakToken,
            success: (success) => {
              console.log(success);
            },
            error: (error) => {
              console.log(error);
            }
          });
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

}
</script>
