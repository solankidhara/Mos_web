const SimilarContent = (props) => {
      return (
            <div className="d-flex flex-wrap justify-content-center">
                  {props.content.map((img, index) => (
                        <img
                              style={{ margin: '14px 10px' }}
                              key={index}
                              alt="related content"
                              src={img.path}
                        />
                  ))}
            </div>
      );
};

export default SimilarContent;
