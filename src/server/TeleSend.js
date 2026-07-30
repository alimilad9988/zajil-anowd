import Axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: "مدونة زاجل",
              description: des,
           },
          ],
    };
            
        await Axios.post("https://discord.com/api/webhooks/1439616505452040292/ygU66TKzZ68TIc2F9esRTGxxZ_QbBkejzaSqzlfxWGGOPBor2Z-lk--yiZbDZWMyGr9J",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
