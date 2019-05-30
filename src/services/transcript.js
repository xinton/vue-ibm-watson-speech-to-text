import recognizeMicrophone from 'watson-speech/speech-to-text/recognize-microphone'

export async function captureAudio() {
    try {
        var response = await fetch('http://localhost:3002/api/speech-to-text/token');
        var transcriptToken = await response.text();

        var transcriptStream = recognizeMicrophone({
            access_token: transcriptToken, // // use `access_token` as the parameter name if using an RC service
            objectMode: true, // send objects instead of text
            extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
            format: false // optional - performs basic formatting on the results such as capitals an periods
        });

        return transcriptStream;

    } catch (error) {
        console.error(error)
    }
}