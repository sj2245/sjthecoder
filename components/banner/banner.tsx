export default function Banner(props) {
  return <>
    <section className={`banner`}>
      <video className={`bannerVideo`} src={`/assets/videos/banner_video.mp4`} autoPlay={true} loop={true}></video>
      <div className={`bannerOverlay`}>
        <div className={`bannerContent`}>
          Hello! I'm
          <br />
          Shakes
        </div>
      </div>
    </section>
  </>
}