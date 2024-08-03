export default function Banner(props) {
  let { topText, bottomText, background, video, backgroundPosition } = props;

  if (!topText) topText = `Hello! I'm`;
  if (!video) video = `/assets/videos/banner_video.mp4`;
  if (!backgroundPosition) backgroundPosition = `center`;
  if (!background) background = `/assets/gifs/gamewaterfallpixelart.gif`;

  return <>
    <section className={`banner ${background ? `customBGBanner` : ``}`} 
      style={{ 
        background: `url(${background})`,
        backgroundPosition: backgroundPosition,
       }}>
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