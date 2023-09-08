import style from "./styles.module.css";
import video from "../../assets/gen2.mp4";
import video2 from "../../assets/dark.mp4";
import video3 from "../../assets/white.mp4";

const About = () => {
  return (
    <div className={style.aboutContainerForm}>
      <div className={style.aboutContainer}>
        <h1> About Me</h1>
        <div className={style.aboutContainerGroup}>
          <video autoPlay muted loop src={video}></video>
          <p className={style.aboutContainerText}>
            A long time ago, in a city of white owls, peace and harmony reigned.
            The inhabitants of this city were known for their wisdom and their
            great ability to see in the dark. However, one day, a great enemy
            came to the city: the Dark Owl God. This powerful being aimed to
            destroy everything the white owls had built and rule in their place.
          </p>
        </div>
        <div className={style.aboutContainerGroup}>

        <p className={style.aboutContainerText}>
          The white owl city fought valiantly against the Dark Owl God, but
          their efforts were in vain. The city was destroyed and many white owls
          lost their lives. Only a few survived, among them a young owl named
          Joel. Joel grew up with the pain of losing his family and friends, but
          also with the determination to avenge them and take down the Dark Owl
          God. As he grew older, Joel secretly trained and prepared to face the
          powerful enemy.
        </p>
        <video autoPlay muted loop src={video3}></video>
        </div>
      <div className={style.aboutContainerGroup}>
        <video autoPlay muted loop src={video2}></video>
        <p className={style.aboutContainerText}>
          {"Finally, the day came when Joel was ready to face the Dark Owl God.\
          With courage and cunning, Joel fought the enemy and managed to defeat\
          it. The city of white owls was rebuilt and Joel became the leader of\
          his people, guiding them to a more prosperous and secure future.\
          Joel's story is an example of the power of courage and determination.\
          Despite the odds, there is always a light at the end of the tunnel."
          }
        </p>
      </div>
      </div>
    </div>
  );
};

export default About;
