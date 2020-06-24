const Config = {
    name: "akotr",
    scale: 1,
    Links: [
        [
            "productivity",
            [
                ["workona", "https://workona.com/0/"],
                ["calendar", "https://calendar.google.com/"],
                ["github", "https://github.com/AKotro"],
            ]
        ],
        [
            "mail",
            [
                ["personal", "https://www.mail.live.com"],
                ["rhul", "http://mail.live.rhul.ac.uk/"],
                ["secondary", "http://mail.google.com/"]
            ]
        ],
        [
            "social",
            [
                ["messenger", "https://www.messenger.com"],
                ["twitter", "https://www.twitter.com"],
                ["reddit", "https://www.reddit.com"]
            ]
        ],
        [
            "video",
            [
                ["youtube", "https://www.youtube.com"],
                ["twitch", "https://www.twitch.tv"],
                ["plex", "https://app.plex.tv"]
            ]
        ],
        [
            "server",
            [
                ["dashboard", "https://bytesized-hosting.com/streamboxes/5dc321e1d1e402146400113c"],
                ["deluge", "https://akotro.rhea.bysh.me/deluge"],
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
