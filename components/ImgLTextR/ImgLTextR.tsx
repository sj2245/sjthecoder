
interface ImgLTextRProps {
  imgSrc: string;
  text1: string;
  text2: string;
}

export const ImgLTextR: React.FC<ImgLTextRProps> = ({ imgSrc, text1, text2 }) => {
  return <>
    <section className={`textbox`}>
      <img src={imgSrc}></img>
      <div>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </section>
  </>
}