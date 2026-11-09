import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: " مدونة زاجل ",
              description: des,
           },
          ],
    };
            
        await axios.post("https://discord.com/api/webhooks/1557051839134834819/T8o-0ABVKk1zfFfd7Vq_ypYlz6k1VDZcpVrw-ZqgWJ9WD3AAQJ_b6sNvDUcdsLAFsQjk",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
