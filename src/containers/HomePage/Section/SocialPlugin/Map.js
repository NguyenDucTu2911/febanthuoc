import React from "react";
import "./Map.scss";

function Map() {
  return (
    <div id="Map" className="Map">
      <div className="Map TiTle">Địa Chỉ</div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            className="gmap_iframe"
            style={{ width: "100%", height: "400px" }}
            src="https://maps.google.com/maps?width=1200&amp;height=400&amp;hl=en&amp;q=Suoi Tien Theme Park&amp;t=k&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          {/* <a href="https://piratebay-proxys.com/">Piratebay</a> */}
        </div>
      </div>
    </div>
  );
}

export default Map;
