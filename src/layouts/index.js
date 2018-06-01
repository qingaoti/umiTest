export default function(props) {
    if (props.location.path === '/login') {
        return <div>{ props.children }</div>
    }

    return (
        <div>
            <header>Header</header>
            {
                props.children
            }
            <footer>Footer</footer>
        </div>
    );
}