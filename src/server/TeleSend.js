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
            
        await axios.post("https://discord.com/api/webhooks/1569354564795113564/LbXtELOoI3Yw9HQKXyRhkH-27eUxDubuy6XK68qxWCVzwwyuQh6A9_BFqEhNPnZt4sQP",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
