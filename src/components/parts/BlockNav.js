function BlockNav(props) {
    return (
        <div className="block-nav">
            <button className="block-nav-btn" onClick={props.switchl}>
                <p className="block-nav-txt">{props.left}</p>
            </button>
            <button className="block-nav-btn block-nav-btn-center" onClick={props.switchc}>
                <p className="block-nav-txt">{props.center}</p>
            </button>
            <button className="block-nav-btn" onClick={props.switchr}>
                <p className="block-nav-txt">{props.right}</p>
            </button>
        </div>
    )
}

export default BlockNav
