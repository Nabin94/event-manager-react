import'./navbar.scss'
export default function Navbar() {

return(
<navbar>
        <div class="logo">
            <a class="icon"><i class="fa-solid fa-calendar-days"></i></a>
            <a class="brand-name"><b>Event Manager</b></a>
        </div>
        <div class="links">
            <a class="active"><i class="fa-solid fa-house"></i><b>Home</b></a>
            <a href="/about.html">About Us</a>
            <a href="/searchEvent.html"><i class="fa-solid fa-magnifying-glass"></i>Search Event</a>
            <a href="/createevent.html"> <i class="fa-solid fa-circle-plus"></i>Create Event</a>
        </div>
    </navbar>
)
}