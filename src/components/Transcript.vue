<template>
  <div class="hello">
    <button v-if="capturingMic === false" @click="startTranscription">Capture Microphone Audio</button>
    <button v-else @click="stopTranscription">Stop</button>
    <p style="color:red">{{ interimTranscriptedMessage }}</p>
    <p v-for="item in transcriptedMessages" >{{ item.msg }}</p>

  </div>
</template>

<script>
import { captureAudio } from "../services/transcript";

export default {
  name: "Transcript",
  props: {
    msg: String
  },
  data: function() {
    return {
      capturingMic: false,
      transcriptionStream: null,
      interimTranscriptedMessage: "",
      transcriptedMessages: [],
    };
  },
  methods: {
    async startTranscription() {
      this.capturingMic = true;
      this.transcriptionStream = await captureAudio();

      this.transcriptionStream.on("data", data => {
        if (data.final) {
          this.interimTranscriptedMessage = '';
          // this.finalTranscriptedMessage = {msg: data.alternatives[0].transcript};
          this.transcriptedMessages =  [...this.transcriptedMessages,  {msg: data.alternatives[0].transcript}];

        } else {
          this.interimTranscriptedMessage = data.alternatives[0].transcript;
        }
      });

      this.transcriptionStream.on("error", function(err) {
        console.error(err);
      });
    },
    stopTranscription() {
      this.capturingMic = false;
      this.transcriptionStream.end();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
