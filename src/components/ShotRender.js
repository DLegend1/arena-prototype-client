
const ShotRenderComponent = (props) => {
    return (
        <div style={{position: "absolute",top: props.top, left: props.left, backgroundColor: props.color, width: props.width, height: props.height}}></div>
    );
}
export default ShotRenderComponent;