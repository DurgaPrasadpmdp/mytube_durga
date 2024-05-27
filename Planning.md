upperNav bar (Main Nav Bar)
burgermenu
logo
search
profile
login/logout

sidenavbar
menu options
HOME
SUBSCRIPTIONS
SHORTS
PLAYLIST
....

Main container
suggestion words scroll
vedios

navbar - one component
sidenavbar one component

remaining outlet

need to hanlde errors

need to handle no internet connection shpowing a godd message

search hit
curl \
 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=devara&type=videos&key=[YOUR_API_KEY]' \
 --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
 --header 'Accept: application/json' \
 --compressed

[pending work]

-> search optimization
-> header - profile Info
-> watchLater,History
-> playlist functionalites
-> subscribe unsubscribe
-> header top suggestions
