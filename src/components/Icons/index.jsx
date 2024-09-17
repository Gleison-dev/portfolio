export default function Icons({ image, alt }) {
  return (
    <>
      <img className="w-32" src={image} alt={alt} />
    </>
  );
}
