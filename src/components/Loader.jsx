import ContentLoader from "react-content-loader"

const Loader = () => {
  return (
    <ContentLoader
      speed={2}
      width={310}
      height={300}
      viewBox="0 0 210 300"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="50" rx="2" ry="2" width="210" height="300" />
    </ContentLoader>
  )
}
export default Loader