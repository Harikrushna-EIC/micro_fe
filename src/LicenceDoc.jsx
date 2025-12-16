import { useState, useEffect } from "react";
import LicenceFees from "./LicenceFees";

export default function LicenceDoc({ id }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      "https://api.qa.platform.hanwhavision.cloud/user/orgs/fcc22f15-b669-4d0c-a545-618e9bee8a55/licenses/v3?dateColumn=all&size=100&page=0&orderBy=createdDate&isAsc=true&serviceIds=vms-service",
      {
        method: "GET",
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIalJueU1hQ3FFbklnQ2o5NlR1OXpQWE9nRTBtLTRUbWV2NWh4TWdFYWRBIn0.eyJleHAiOjE3NjU5MjQwMzEsImlhdCI6MTc2NTg4MDgzMSwiYXV0aF90aW1lIjoxNzY1ODgwODI3LCJqdGkiOiIyYzZjOGU1Ni0wZjEwLTRjNTEtYTEyNy01NmRkODZjYzg1YTQiLCJpc3MiOiJodHRwczovL2F1dGgucWEucGxhdGZvcm0uaGFud2hhdmlzaW9uLmNsb3VkL3JlYWxtcy9odmEiLCJhdWQiOlsiaW50ZXJuYWwtdm1zLXNhYXMtYXBwIiwiYWNjb3VudCJdLCJzdWIiOiIxM2VjNjk5My1mZjBiLTQ1ZjctODQyMC1jZDIxYWE1MzkxZjciLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJ2bXMtYXBwIiwic2lkIjoiMmI2M2Y5YTItOTE3NC00ZmMzLWE1OTktYTc5MTg2ZmQzZjUxIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL212LnFhLm9uY2xvdWQuaGFud2hhdmlzaW9uLmNsb3VkIiwiaHR0cHM6Ly9wZXJmb3JtYW5jZS5xYS5vbmNsb3VkLmhhbndoYXZpc2lvbi5jbG91ZCIsImh0dHBzOi8vdGFnMS5xYS5vbmNsb3VkLmhhbndoYXZpc2lvbi5jbG91ZCIsImh0dHBzOi8vYmxhemVkZXYucWEub25jbG91ZC5oYW53aGF2aXNpb24uY2xvdWQiLCJodHRwczovL29iZnVzY2F0aW9uLnFhLm9uY2xvdWQuaGFud2hhdmlzaW9uLmNsb3VkIiwiaHR0cHM6Ly91bml0eS5xYS5vbmNsb3VkLmhhbndoYXZpc2lvbi5jbG91ZCIsImh0dHBzOi8vYmxhemUucWEub25jbG91ZC5oYW53aGF2aXNpb24uY2xvdWQiLCJodHRwczovL2NhbmFyeS1wbGF5YmFjay5xYS5wbGF0Zm9ybS5oYW53aGF2aXNpb24uY2xvdWQiLCJodHRwczovL2Nnci5xYS5vbmNsb3VkLmhhbndoYXZpc2lvbi5jbG91ZCIsImh0dHBzOi8vcWEub25jbG91ZC5oYW53aGF2aXNpb24uY2xvdWQiLCJodHRwczovL2JsYXplLXRpbWVsaW5lLnFhLm9uY2xvdWQuaGFud2hhdmlzaW9uLmNsb3VkIiwiaHR0cHM6Ly9tdWx0aW9yZy5xYS5vbmNsb3VkLmhhbndoYXZpc2lvbi5jbG91ZCIsImh0dHBzOi8vaG90Zml4LnFhLm9uY2xvdWQuaGFud2hhdmlzaW9uLmNsb3VkIiwiaHR0cHM6Ly9pbnRlZ3JhdGlvbi5xYS5vbmNsb3VkLmhhbndoYXZpc2lvbi5jbG91ZCIsImh0dHBzOi8vdGFnLnFhLm9uY2xvdWQuaGFud2hhdmlzaW9uLmNsb3VkIiwiaHR0cHM6Ly9jb25uZWN0LWNhbmFyeS5xYS5vbmNsb3VkLmhhbndoYXZpc2lvbi5jbG91ZCIsImh0dHBzOi8vY2FtZXJhdmlld3MucWEub25jbG91ZC5oYW53aGF2aXNpb24uY2xvdWQiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm1hbmFnZS11c2VycyIsInBhcnRuZXJfc2VydmljZV92bXNfdXNlciIsImRlZmF1bHQtcm9sZXMtaHZhIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiaW50ZXJuYWwtdm1zLXNhYXMtYXBwIjp7InJvbGVzIjpbIm1hbmFnZS11c2VycyIsInVtYV9wcm90ZWN0aW9uIiwiYWRtaW4iLCJ1c2VyIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYWNjb3VudElkIjoiMTRkMTU4YzYtNmQ1OS00NjIzLWIxNmUtOWU3NTNiMjk5YjdmIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJoYWxpbXMgbGVlIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiaGFsaW1AaGFud2hhLmNvbSIsImdpdmVuX25hbWUiOiJoYWxpbXMiLCJmYW1pbHlfbmFtZSI6ImxlZSIsImVtYWlsIjoiaGFsaW1AaGFud2hhLmNvbSJ9.PS9a8yMbs8UvVZvRrCSGcOtvM3VIlGA9BJrcUr5-lQrYzlRL3mcEeMKuzsRbdTwz-bDyHKTJQhX6Yl-NXTLPwH3gOylGpxpbZmZyA33J_wH3s1RWsjnFIGkGVn6-nDkgm8i-wZigayFu_EZstCW_aElzyLZvxUz7jw-otJl_mx-13Aaqznk42ykKUBY705g4HEI0Dj12YAm6i9IJ5DBZutAN0n5idOKtbfYp6w9Ow25VJYlvFZF4tOIhl6vbTVn7WBckAlBaP4O11VY0bnAPWsXoUsM1M2u7jkzmf5KhdUHwDv4mTIW3j2J209z8FybEnODIUKnM1lIkRR3Oo7m9Jw",
          origin: "https://qa.oncloud.hanwhavision.cloud",
          referer: "https://qa.oncloud.hanwhavision.cloud/",
          "sec-ch-ua":
            '"Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
          "x-app-id": "oncloud",
          "x-client-version": "WebVMS-1.75.0",
          "x-correlation-id": "a49d26e7-bf8a-419c-b851-0b03aef0b9e9",
          "x-tenant-id": "hva",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response:", data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);
  return (
    <div style={{ border: "1px solid black", padding: 12 }}>
      <h3>Licence Provider Main</h3>
      <div key={data.id}>
        <h4>{data.title}</h4>
        <p>{data.body}</p>
      </div>
      <LicenceFees test={"Fees"} />
    </div>
  );
}
