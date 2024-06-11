import React, {useState, useEffect} from 'react'

function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const gotoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const listenToScroll = () => {
    let heightToHidden = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <>
      {isVisible && (<button className="bg-[#ff5757] fixed text-[#fff] text-[25px] py-[8px] px-[19px] rounded-[50%] right-[3%] bottom-[2%] z-[5] animate-bounce" onClick={gotoTop}>
        <i class="fa-solid fa-up-long" />
      </button>)}
    </>



  )
}

export default GoToTop