import React, { useEffect } from "react";

const GoogleAdBanner = () => {
    useEffect(() => {
        if (window.adsbygoogle) {
            window.adsbygoogle.push({});
        }
    }, []);

    return (
        <div>
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-2725262234054386"
                data-ad-slot="7516972524"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        </div>
    );
};

export default GoogleAdBanner;