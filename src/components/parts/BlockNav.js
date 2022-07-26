function BlockNav(props) {
    return (
        <div className="block-nav">
            <button className="block-nav-btn">
                <p className="block-nav-txt">{props.left}</p>
            </button>
            <button className="block-nav-btn block-nav-btn-center">
                <p className="block-nav-txt">{props.center}</p>
            </button>
            <button className="block-nav-btn">
                <p className="block-nav-txt">{props.right}</p>
            </button>
        </div>
    )
}

export default BlockNav
