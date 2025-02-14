# NomadWeather

Location Expo Package를 이용해서 위치를 가져올 것 이다.
위치를 가져온 다음에 해당되는 위치에서 16일 간의 기상예보를 가져옴.
Expo를 사용해 좌표를 얻음. 그 좌표를 이 날씨 API에게 보냄.
우리가 있는 도시 이름과 일기예보 array를 얻음.
기상예보의 name과 description, 온도나 습도를 보여줄 것 임.

ScrollView: 내부에 컴포넌트와 뷰들을 자식으로 담을 수 있는, 화면의 스크롤을 사용할 때 사용함.
(ScrollView는 contentContainerStyle로 변경해줘야 함)

props
* horizontal : 스크롤 방향을 수평으로 바꿔 줌
* pagingEnabled : 스크롤이 자유롭지 못 하게 해줌, 페이지가 생기도록 해줌
* showHorizontalScrollIndicator : scroll indicator를 숨김(false로 지정)

Dimensions(API) : 사용자 화면의 크기를 얻을 수 있음
ex) windowWidth = Dimensions.get('window').width;
ES6 => const { width:SCREEN_WIDTH } = Dimensions.get("window");