function HobbyLinks() {
    let hobbyLinksArr = [ "https://www.climbing.com/", "https://www.mountainproject.com/" ];
    return(
    <>
    <a href = {hobbyLinksArr[0]}>Climbing Articles</a>
    <br/>
    <a href = {hobbyLinksArr[1]}>Find a Climb</a>
    </>
    )
}

export default HobbyLinks;