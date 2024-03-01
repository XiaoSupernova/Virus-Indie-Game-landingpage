const styles = {
  boxWidth: "xl:max-w-[1536px] w-full",
  title: " font-sans xs:text-[55px] text-[32px]",
  heading1:
    "font-bold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  heading2:
    "font-semibold xs:text-[40px] text-[32px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-2",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export const animation = {
  starbounce: `w-[47px] h-[47px] sm:w-[58px] sm:h-[58px]  lg:w-[74px] lg:h-[74px] alert-star animate-bounce`,
};
export default styles;
