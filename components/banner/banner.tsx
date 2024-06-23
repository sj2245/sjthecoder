export default function Banner(props) {
  let { topText, bottomText, background } = props;
  if (!topText) topText = `Hello! I'm`;
  if (!background) background = `/assets/videos/banner_video.mp4`;
  return <>
    <section className={`banner`}>
      <video 
        className={`bannerVideo`} 
        src={background} 
        autoPlay={true} 
        loop={true} 
      />
      <div className={`bannerOverlay`}>
        <div className={`bannerContent`}>
          {topText}
          {bottomText != null && bottomText != undefined && <>
            <br />
            {bottomText}
          </>}
        </div>
      </div>
    </section>
  </>
}