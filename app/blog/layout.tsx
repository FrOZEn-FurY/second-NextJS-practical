const Layout = ({children}: {children: React.ReactNode}): JSX.Element => {
    return ( 
        <div style={{backgroundColor: 'black', border: "1px solid white", padding: "10px"}}>
            {children}
        </div>
    );
}
 
export default Layout;