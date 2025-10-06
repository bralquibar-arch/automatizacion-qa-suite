/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 52.0, "minX": 0.0, "maxY": 6396.0, "series": [{"data": [[0.0, 52.0], [0.1, 59.0], [0.2, 60.0], [0.3, 62.0], [0.4, 63.0], [0.5, 63.0], [0.6, 64.0], [0.7, 65.0], [0.8, 65.0], [0.9, 66.0], [1.0, 66.0], [1.1, 67.0], [1.2, 67.0], [1.3, 68.0], [1.4, 68.0], [1.5, 69.0], [1.6, 69.0], [1.7, 70.0], [1.8, 70.0], [1.9, 70.0], [2.0, 71.0], [2.1, 71.0], [2.2, 71.0], [2.3, 72.0], [2.4, 72.0], [2.5, 73.0], [2.6, 73.0], [2.7, 73.0], [2.8, 74.0], [2.9, 74.0], [3.0, 75.0], [3.1, 75.0], [3.2, 75.0], [3.3, 75.0], [3.4, 76.0], [3.5, 76.0], [3.6, 77.0], [3.7, 77.0], [3.8, 77.0], [3.9, 78.0], [4.0, 78.0], [4.1, 78.0], [4.2, 79.0], [4.3, 79.0], [4.4, 80.0], [4.5, 80.0], [4.6, 80.0], [4.7, 80.0], [4.8, 81.0], [4.9, 81.0], [5.0, 81.0], [5.1, 82.0], [5.2, 82.0], [5.3, 82.0], [5.4, 82.0], [5.5, 83.0], [5.6, 83.0], [5.7, 83.0], [5.8, 83.0], [5.9, 84.0], [6.0, 84.0], [6.1, 84.0], [6.2, 84.0], [6.3, 84.0], [6.4, 85.0], [6.5, 85.0], [6.6, 85.0], [6.7, 85.0], [6.8, 86.0], [6.9, 86.0], [7.0, 86.0], [7.1, 86.0], [7.2, 87.0], [7.3, 87.0], [7.4, 87.0], [7.5, 87.0], [7.6, 88.0], [7.7, 88.0], [7.8, 88.0], [7.9, 88.0], [8.0, 88.0], [8.1, 89.0], [8.2, 89.0], [8.3, 89.0], [8.4, 89.0], [8.5, 89.0], [8.6, 90.0], [8.7, 90.0], [8.8, 90.0], [8.9, 90.0], [9.0, 90.0], [9.1, 91.0], [9.2, 91.0], [9.3, 91.0], [9.4, 91.0], [9.5, 91.0], [9.6, 92.0], [9.7, 92.0], [9.8, 92.0], [9.9, 92.0], [10.0, 92.0], [10.1, 93.0], [10.2, 93.0], [10.3, 93.0], [10.4, 93.0], [10.5, 93.0], [10.6, 93.0], [10.7, 94.0], [10.8, 94.0], [10.9, 94.0], [11.0, 94.0], [11.1, 94.0], [11.2, 95.0], [11.3, 95.0], [11.4, 95.0], [11.5, 95.0], [11.6, 95.0], [11.7, 96.0], [11.8, 96.0], [11.9, 96.0], [12.0, 96.0], [12.1, 96.0], [12.2, 97.0], [12.3, 97.0], [12.4, 97.0], [12.5, 97.0], [12.6, 97.0], [12.7, 97.0], [12.8, 98.0], [12.9, 98.0], [13.0, 98.0], [13.1, 98.0], [13.2, 98.0], [13.3, 99.0], [13.4, 99.0], [13.5, 99.0], [13.6, 99.0], [13.7, 99.0], [13.8, 100.0], [13.9, 100.0], [14.0, 100.0], [14.1, 100.0], [14.2, 100.0], [14.3, 101.0], [14.4, 101.0], [14.5, 101.0], [14.6, 101.0], [14.7, 101.0], [14.8, 102.0], [14.9, 102.0], [15.0, 102.0], [15.1, 103.0], [15.2, 103.0], [15.3, 103.0], [15.4, 103.0], [15.5, 104.0], [15.6, 104.0], [15.7, 104.0], [15.8, 105.0], [15.9, 105.0], [16.0, 105.0], [16.1, 106.0], [16.2, 106.0], [16.3, 106.0], [16.4, 107.0], [16.5, 107.0], [16.6, 107.0], [16.7, 108.0], [16.8, 108.0], [16.9, 108.0], [17.0, 109.0], [17.1, 109.0], [17.2, 110.0], [17.3, 110.0], [17.4, 111.0], [17.5, 111.0], [17.6, 112.0], [17.7, 112.0], [17.8, 113.0], [17.9, 114.0], [18.0, 114.0], [18.1, 115.0], [18.2, 115.0], [18.3, 116.0], [18.4, 117.0], [18.5, 117.0], [18.6, 118.0], [18.7, 119.0], [18.8, 119.0], [18.9, 120.0], [19.0, 120.0], [19.1, 121.0], [19.2, 121.0], [19.3, 122.0], [19.4, 122.0], [19.5, 123.0], [19.6, 123.0], [19.7, 124.0], [19.8, 125.0], [19.9, 125.0], [20.0, 126.0], [20.1, 127.0], [20.2, 127.0], [20.3, 128.0], [20.4, 128.0], [20.5, 129.0], [20.6, 129.0], [20.7, 130.0], [20.8, 130.0], [20.9, 131.0], [21.0, 132.0], [21.1, 132.0], [21.2, 133.0], [21.3, 133.0], [21.4, 134.0], [21.5, 134.0], [21.6, 135.0], [21.7, 136.0], [21.8, 137.0], [21.9, 137.0], [22.0, 138.0], [22.1, 139.0], [22.2, 139.0], [22.3, 140.0], [22.4, 141.0], [22.5, 141.0], [22.6, 142.0], [22.7, 143.0], [22.8, 144.0], [22.9, 145.0], [23.0, 145.0], [23.1, 146.0], [23.2, 147.0], [23.3, 148.0], [23.4, 150.0], [23.5, 151.0], [23.6, 151.0], [23.7, 152.0], [23.8, 153.0], [23.9, 155.0], [24.0, 156.0], [24.1, 157.0], [24.2, 158.0], [24.3, 160.0], [24.4, 161.0], [24.5, 163.0], [24.6, 164.0], [24.7, 165.0], [24.8, 166.0], [24.9, 167.0], [25.0, 168.0], [25.1, 170.0], [25.2, 171.0], [25.3, 172.0], [25.4, 173.0], [25.5, 174.0], [25.6, 175.0], [25.7, 176.0], [25.8, 177.0], [25.9, 177.0], [26.0, 178.0], [26.1, 179.0], [26.2, 180.0], [26.3, 181.0], [26.4, 181.0], [26.5, 182.0], [26.6, 182.0], [26.7, 183.0], [26.8, 183.0], [26.9, 184.0], [27.0, 185.0], [27.1, 185.0], [27.2, 185.0], [27.3, 186.0], [27.4, 187.0], [27.5, 187.0], [27.6, 188.0], [27.7, 188.0], [27.8, 189.0], [27.9, 189.0], [28.0, 190.0], [28.1, 190.0], [28.2, 191.0], [28.3, 191.0], [28.4, 191.0], [28.5, 192.0], [28.6, 192.0], [28.7, 193.0], [28.8, 193.0], [28.9, 193.0], [29.0, 194.0], [29.1, 194.0], [29.2, 194.0], [29.3, 195.0], [29.4, 195.0], [29.5, 196.0], [29.6, 196.0], [29.7, 196.0], [29.8, 197.0], [29.9, 197.0], [30.0, 197.0], [30.1, 197.0], [30.2, 198.0], [30.3, 198.0], [30.4, 198.0], [30.5, 199.0], [30.6, 199.0], [30.7, 199.0], [30.8, 200.0], [30.9, 200.0], [31.0, 200.0], [31.1, 200.0], [31.2, 201.0], [31.3, 201.0], [31.4, 201.0], [31.5, 201.0], [31.6, 202.0], [31.7, 202.0], [31.8, 202.0], [31.9, 202.0], [32.0, 203.0], [32.1, 203.0], [32.2, 203.0], [32.3, 203.0], [32.4, 204.0], [32.5, 204.0], [32.6, 204.0], [32.7, 205.0], [32.8, 205.0], [32.9, 205.0], [33.0, 205.0], [33.1, 206.0], [33.2, 206.0], [33.3, 206.0], [33.4, 206.0], [33.5, 206.0], [33.6, 207.0], [33.7, 207.0], [33.8, 207.0], [33.9, 207.0], [34.0, 208.0], [34.1, 208.0], [34.2, 208.0], [34.3, 208.0], [34.4, 208.0], [34.5, 209.0], [34.6, 209.0], [34.7, 209.0], [34.8, 209.0], [34.9, 209.0], [35.0, 209.0], [35.1, 210.0], [35.2, 210.0], [35.3, 210.0], [35.4, 210.0], [35.5, 210.0], [35.6, 211.0], [35.7, 211.0], [35.8, 211.0], [35.9, 211.0], [36.0, 211.0], [36.1, 211.0], [36.2, 211.0], [36.3, 212.0], [36.4, 212.0], [36.5, 212.0], [36.6, 212.0], [36.7, 212.0], [36.8, 212.0], [36.9, 213.0], [37.0, 213.0], [37.1, 213.0], [37.2, 213.0], [37.3, 213.0], [37.4, 214.0], [37.5, 214.0], [37.6, 214.0], [37.7, 214.0], [37.8, 214.0], [37.9, 215.0], [38.0, 215.0], [38.1, 215.0], [38.2, 215.0], [38.3, 215.0], [38.4, 215.0], [38.5, 215.0], [38.6, 216.0], [38.7, 216.0], [38.8, 216.0], [38.9, 216.0], [39.0, 216.0], [39.1, 216.0], [39.2, 217.0], [39.3, 217.0], [39.4, 217.0], [39.5, 217.0], [39.6, 217.0], [39.7, 217.0], [39.8, 217.0], [39.9, 218.0], [40.0, 218.0], [40.1, 218.0], [40.2, 218.0], [40.3, 218.0], [40.4, 218.0], [40.5, 219.0], [40.6, 219.0], [40.7, 219.0], [40.8, 219.0], [40.9, 219.0], [41.0, 219.0], [41.1, 219.0], [41.2, 220.0], [41.3, 220.0], [41.4, 220.0], [41.5, 220.0], [41.6, 220.0], [41.7, 220.0], [41.8, 220.0], [41.9, 221.0], [42.0, 221.0], [42.1, 221.0], [42.2, 221.0], [42.3, 221.0], [42.4, 221.0], [42.5, 221.0], [42.6, 222.0], [42.7, 222.0], [42.8, 222.0], [42.9, 222.0], [43.0, 222.0], [43.1, 222.0], [43.2, 222.0], [43.3, 223.0], [43.4, 223.0], [43.5, 223.0], [43.6, 223.0], [43.7, 223.0], [43.8, 223.0], [43.9, 223.0], [44.0, 224.0], [44.1, 224.0], [44.2, 224.0], [44.3, 224.0], [44.4, 224.0], [44.5, 224.0], [44.6, 224.0], [44.7, 225.0], [44.8, 225.0], [44.9, 225.0], [45.0, 225.0], [45.1, 225.0], [45.2, 225.0], [45.3, 225.0], [45.4, 226.0], [45.5, 226.0], [45.6, 226.0], [45.7, 226.0], [45.8, 226.0], [45.9, 226.0], [46.0, 226.0], [46.1, 226.0], [46.2, 227.0], [46.3, 227.0], [46.4, 227.0], [46.5, 227.0], [46.6, 227.0], [46.7, 227.0], [46.8, 227.0], [46.9, 228.0], [47.0, 228.0], [47.1, 228.0], [47.2, 228.0], [47.3, 228.0], [47.4, 228.0], [47.5, 228.0], [47.6, 228.0], [47.7, 229.0], [47.8, 229.0], [47.9, 229.0], [48.0, 229.0], [48.1, 229.0], [48.2, 229.0], [48.3, 229.0], [48.4, 230.0], [48.5, 230.0], [48.6, 230.0], [48.7, 230.0], [48.8, 230.0], [48.9, 230.0], [49.0, 230.0], [49.1, 230.0], [49.2, 231.0], [49.3, 231.0], [49.4, 231.0], [49.5, 231.0], [49.6, 231.0], [49.7, 231.0], [49.8, 231.0], [49.9, 232.0], [50.0, 232.0], [50.1, 232.0], [50.2, 232.0], [50.3, 232.0], [50.4, 232.0], [50.5, 232.0], [50.6, 232.0], [50.7, 233.0], [50.8, 233.0], [50.9, 233.0], [51.0, 233.0], [51.1, 233.0], [51.2, 233.0], [51.3, 233.0], [51.4, 233.0], [51.5, 234.0], [51.6, 234.0], [51.7, 234.0], [51.8, 234.0], [51.9, 234.0], [52.0, 234.0], [52.1, 234.0], [52.2, 234.0], [52.3, 235.0], [52.4, 235.0], [52.5, 235.0], [52.6, 235.0], [52.7, 235.0], [52.8, 235.0], [52.9, 235.0], [53.0, 236.0], [53.1, 236.0], [53.2, 236.0], [53.3, 236.0], [53.4, 236.0], [53.5, 236.0], [53.6, 236.0], [53.7, 236.0], [53.8, 237.0], [53.9, 237.0], [54.0, 237.0], [54.1, 237.0], [54.2, 237.0], [54.3, 237.0], [54.4, 237.0], [54.5, 238.0], [54.6, 238.0], [54.7, 238.0], [54.8, 238.0], [54.9, 238.0], [55.0, 238.0], [55.1, 238.0], [55.2, 239.0], [55.3, 239.0], [55.4, 239.0], [55.5, 239.0], [55.6, 239.0], [55.7, 239.0], [55.8, 239.0], [55.9, 240.0], [56.0, 240.0], [56.1, 240.0], [56.2, 240.0], [56.3, 240.0], [56.4, 240.0], [56.5, 240.0], [56.6, 240.0], [56.7, 241.0], [56.8, 241.0], [56.9, 241.0], [57.0, 241.0], [57.1, 241.0], [57.2, 241.0], [57.3, 242.0], [57.4, 242.0], [57.5, 242.0], [57.6, 242.0], [57.7, 242.0], [57.8, 242.0], [57.9, 242.0], [58.0, 243.0], [58.1, 243.0], [58.2, 243.0], [58.3, 243.0], [58.4, 243.0], [58.5, 243.0], [58.6, 243.0], [58.7, 243.0], [58.8, 244.0], [58.9, 244.0], [59.0, 244.0], [59.1, 244.0], [59.2, 244.0], [59.3, 244.0], [59.4, 244.0], [59.5, 245.0], [59.6, 245.0], [59.7, 245.0], [59.8, 245.0], [59.9, 245.0], [60.0, 245.0], [60.1, 245.0], [60.2, 246.0], [60.3, 246.0], [60.4, 246.0], [60.5, 246.0], [60.6, 246.0], [60.7, 246.0], [60.8, 247.0], [60.9, 247.0], [61.0, 247.0], [61.1, 247.0], [61.2, 247.0], [61.3, 247.0], [61.4, 248.0], [61.5, 248.0], [61.6, 248.0], [61.7, 248.0], [61.8, 248.0], [61.9, 248.0], [62.0, 248.0], [62.1, 248.0], [62.2, 249.0], [62.3, 249.0], [62.4, 249.0], [62.5, 249.0], [62.6, 249.0], [62.7, 249.0], [62.8, 249.0], [62.9, 250.0], [63.0, 250.0], [63.1, 250.0], [63.2, 250.0], [63.3, 250.0], [63.4, 250.0], [63.5, 251.0], [63.6, 251.0], [63.7, 251.0], [63.8, 251.0], [63.9, 251.0], [64.0, 251.0], [64.1, 252.0], [64.2, 252.0], [64.3, 252.0], [64.4, 252.0], [64.5, 252.0], [64.6, 252.0], [64.7, 253.0], [64.8, 253.0], [64.9, 253.0], [65.0, 253.0], [65.1, 253.0], [65.2, 254.0], [65.3, 254.0], [65.4, 254.0], [65.5, 254.0], [65.6, 254.0], [65.7, 255.0], [65.8, 255.0], [65.9, 255.0], [66.0, 255.0], [66.1, 255.0], [66.2, 255.0], [66.3, 256.0], [66.4, 256.0], [66.5, 256.0], [66.6, 256.0], [66.7, 256.0], [66.8, 257.0], [66.9, 257.0], [67.0, 257.0], [67.1, 257.0], [67.2, 257.0], [67.3, 258.0], [67.4, 258.0], [67.5, 258.0], [67.6, 258.0], [67.7, 259.0], [67.8, 259.0], [67.9, 259.0], [68.0, 259.0], [68.1, 260.0], [68.2, 260.0], [68.3, 260.0], [68.4, 260.0], [68.5, 261.0], [68.6, 261.0], [68.7, 261.0], [68.8, 261.0], [68.9, 261.0], [69.0, 262.0], [69.1, 262.0], [69.2, 262.0], [69.3, 263.0], [69.4, 263.0], [69.5, 263.0], [69.6, 263.0], [69.7, 264.0], [69.8, 264.0], [69.9, 264.0], [70.0, 264.0], [70.1, 265.0], [70.2, 265.0], [70.3, 265.0], [70.4, 266.0], [70.5, 266.0], [70.6, 266.0], [70.7, 266.0], [70.8, 266.0], [70.9, 267.0], [71.0, 267.0], [71.1, 267.0], [71.2, 268.0], [71.3, 268.0], [71.4, 268.0], [71.5, 268.0], [71.6, 269.0], [71.7, 269.0], [71.8, 269.0], [71.9, 270.0], [72.0, 270.0], [72.1, 270.0], [72.2, 271.0], [72.3, 271.0], [72.4, 272.0], [72.5, 272.0], [72.6, 272.0], [72.7, 272.0], [72.8, 273.0], [72.9, 273.0], [73.0, 273.0], [73.1, 274.0], [73.2, 274.0], [73.3, 274.0], [73.4, 274.0], [73.5, 275.0], [73.6, 275.0], [73.7, 275.0], [73.8, 276.0], [73.9, 276.0], [74.0, 276.0], [74.1, 276.0], [74.2, 277.0], [74.3, 277.0], [74.4, 277.0], [74.5, 278.0], [74.6, 278.0], [74.7, 278.0], [74.8, 279.0], [74.9, 279.0], [75.0, 279.0], [75.1, 280.0], [75.2, 280.0], [75.3, 280.0], [75.4, 281.0], [75.5, 281.0], [75.6, 281.0], [75.7, 282.0], [75.8, 282.0], [75.9, 282.0], [76.0, 282.0], [76.1, 283.0], [76.2, 283.0], [76.3, 283.0], [76.4, 284.0], [76.5, 284.0], [76.6, 284.0], [76.7, 284.0], [76.8, 285.0], [76.9, 285.0], [77.0, 285.0], [77.1, 286.0], [77.2, 286.0], [77.3, 286.0], [77.4, 287.0], [77.5, 287.0], [77.6, 287.0], [77.7, 288.0], [77.8, 288.0], [77.9, 288.0], [78.0, 289.0], [78.1, 289.0], [78.2, 289.0], [78.3, 290.0], [78.4, 290.0], [78.5, 290.0], [78.6, 291.0], [78.7, 291.0], [78.8, 291.0], [78.9, 291.0], [79.0, 292.0], [79.1, 292.0], [79.2, 292.0], [79.3, 293.0], [79.4, 293.0], [79.5, 293.0], [79.6, 294.0], [79.7, 294.0], [79.8, 294.0], [79.9, 295.0], [80.0, 295.0], [80.1, 295.0], [80.2, 296.0], [80.3, 296.0], [80.4, 296.0], [80.5, 297.0], [80.6, 297.0], [80.7, 298.0], [80.8, 298.0], [80.9, 298.0], [81.0, 298.0], [81.1, 299.0], [81.2, 299.0], [81.3, 299.0], [81.4, 300.0], [81.5, 300.0], [81.6, 300.0], [81.7, 301.0], [81.8, 301.0], [81.9, 302.0], [82.0, 302.0], [82.1, 302.0], [82.2, 303.0], [82.3, 303.0], [82.4, 303.0], [82.5, 304.0], [82.6, 304.0], [82.7, 305.0], [82.8, 305.0], [82.9, 305.0], [83.0, 306.0], [83.1, 306.0], [83.2, 307.0], [83.3, 307.0], [83.4, 307.0], [83.5, 308.0], [83.6, 308.0], [83.7, 309.0], [83.8, 309.0], [83.9, 310.0], [84.0, 310.0], [84.1, 310.0], [84.2, 311.0], [84.3, 311.0], [84.4, 312.0], [84.5, 312.0], [84.6, 313.0], [84.7, 313.0], [84.8, 313.0], [84.9, 314.0], [85.0, 314.0], [85.1, 315.0], [85.2, 315.0], [85.3, 315.0], [85.4, 316.0], [85.5, 316.0], [85.6, 317.0], [85.7, 317.0], [85.8, 318.0], [85.9, 318.0], [86.0, 319.0], [86.1, 319.0], [86.2, 320.0], [86.3, 320.0], [86.4, 321.0], [86.5, 321.0], [86.6, 321.0], [86.7, 322.0], [86.8, 323.0], [86.9, 323.0], [87.0, 324.0], [87.1, 324.0], [87.2, 325.0], [87.3, 326.0], [87.4, 326.0], [87.5, 327.0], [87.6, 327.0], [87.7, 328.0], [87.8, 329.0], [87.9, 329.0], [88.0, 330.0], [88.1, 331.0], [88.2, 331.0], [88.3, 332.0], [88.4, 332.0], [88.5, 333.0], [88.6, 334.0], [88.7, 334.0], [88.8, 335.0], [88.9, 336.0], [89.0, 336.0], [89.1, 337.0], [89.2, 338.0], [89.3, 339.0], [89.4, 340.0], [89.5, 341.0], [89.6, 341.0], [89.7, 342.0], [89.8, 343.0], [89.9, 344.0], [90.0, 346.0], [90.1, 347.0], [90.2, 348.0], [90.3, 349.0], [90.4, 350.0], [90.5, 351.0], [90.6, 352.0], [90.7, 353.0], [90.8, 355.0], [90.9, 356.0], [91.0, 357.0], [91.1, 359.0], [91.2, 361.0], [91.3, 363.0], [91.4, 364.0], [91.5, 366.0], [91.6, 367.0], [91.7, 369.0], [91.8, 371.0], [91.9, 373.0], [92.0, 375.0], [92.1, 376.0], [92.2, 378.0], [92.3, 379.0], [92.4, 381.0], [92.5, 384.0], [92.6, 387.0], [92.7, 390.0], [92.8, 393.0], [92.9, 396.0], [93.0, 400.0], [93.1, 402.0], [93.2, 404.0], [93.3, 410.0], [93.4, 413.0], [93.5, 418.0], [93.6, 424.0], [93.7, 429.0], [93.8, 434.0], [93.9, 440.0], [94.0, 445.0], [94.1, 454.0], [94.2, 464.0], [94.3, 475.0], [94.4, 484.0], [94.5, 492.0], [94.6, 501.0], [94.7, 506.0], [94.8, 515.0], [94.9, 522.0], [95.0, 529.0], [95.1, 533.0], [95.2, 538.0], [95.3, 543.0], [95.4, 547.0], [95.5, 551.0], [95.6, 555.0], [95.7, 557.0], [95.8, 562.0], [95.9, 565.0], [96.0, 568.0], [96.1, 571.0], [96.2, 574.0], [96.3, 578.0], [96.4, 580.0], [96.5, 584.0], [96.6, 587.0], [96.7, 591.0], [96.8, 594.0], [96.9, 597.0], [97.0, 600.0], [97.1, 604.0], [97.2, 609.0], [97.3, 614.0], [97.4, 618.0], [97.5, 624.0], [97.6, 629.0], [97.7, 637.0], [97.8, 642.0], [97.9, 648.0], [98.0, 654.0], [98.1, 661.0], [98.2, 669.0], [98.3, 676.0], [98.4, 683.0], [98.5, 692.0], [98.6, 703.0], [98.7, 719.0], [98.8, 739.0], [98.9, 759.0], [99.0, 790.0], [99.1, 815.0], [99.2, 840.0], [99.3, 864.0], [99.4, 898.0], [99.5, 921.0], [99.6, 953.0], [99.7, 1012.0], [99.8, 1191.0], [99.9, 1437.0], [100.0, 6396.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 24025.0, "series": [{"data": [[0.0, 6535.0], [600.0, 754.0], [700.0, 230.0], [800.0, 173.0], [900.0, 138.0], [1000.0, 31.0], [1100.0, 20.0], [1200.0, 19.0], [1300.0, 19.0], [1400.0, 15.0], [1500.0, 16.0], [100.0, 8101.0], [1600.0, 4.0], [1700.0, 1.0], [1800.0, 3.0], [1900.0, 5.0], [2000.0, 2.0], [2200.0, 2.0], [2300.0, 1.0], [2400.0, 2.0], [200.0, 24025.0], [4400.0, 2.0], [300.0, 5543.0], [4700.0, 1.0], [6300.0, 1.0], [400.0, 759.0], [500.0, 1133.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 40.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 44967.0, "series": [{"data": [[0.0, 44967.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2528.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 40.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 69.0869179600887, "minX": 1.75975788E12, "maxY": 100.0, "series": [{"data": [[1.75975794E12, 100.0], [1.759758E12, 99.74363230793175], [1.75975788E12, 69.0869179600887]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.759758E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 68.09090909090911, "minX": 1.0, "maxY": 1967.0, "series": [{"data": [[3.0, 497.5], [4.0, 884.0], [5.0, 407.0], [6.0, 282.8571428571429], [7.0, 99.11111111111111], [8.0, 95.81818181818183], [9.0, 88.84615384615384], [10.0, 91.64285714285717], [11.0, 90.1875], [12.0, 84.73333333333335], [13.0, 78.58823529411767], [14.0, 79.42105263157895], [15.0, 90.83333333333333], [16.0, 81.90000000000002], [17.0, 76.82608695652173], [18.0, 80.0], [19.0, 78.91304347826087], [20.0, 80.1], [21.0, 68.10344827586206], [22.0, 84.90624999999997], [23.0, 68.09090909090911], [24.0, 96.06060606060606], [25.0, 78.57692307692307], [26.0, 88.92105263157896], [27.0, 76.0], [28.0, 74.29729729729729], [29.0, 84.175], [30.0, 88.04347826086959], [31.0, 108.56666666666665], [32.0, 107.21739130434783], [33.0, 136.51612903225805], [34.0, 98.16666666666667], [35.0, 99.1], [36.0, 82.33333333333333], [37.0, 119.325], [38.0, 93.79545454545456], [39.0, 96.02325581395348], [40.0, 96.41463414634141], [41.0, 109.92307692307692], [42.0, 102.3157894736842], [43.0, 106.06818181818183], [44.0, 111.77142857142857], [45.0, 110.97777777777777], [46.0, 105.34146341463412], [47.0, 121.51162790697674], [48.0, 115.65116279069764], [49.0, 124.45945945945948], [50.0, 103.38888888888889], [51.0, 135.695652173913], [52.0, 117.20000000000003], [53.0, 142.82500000000005], [54.0, 111.32352941176468], [55.0, 148.37999999999994], [56.0, 135.05405405405406], [57.0, 124.55813953488372], [58.0, 138.04878048780492], [59.0, 148.18750000000003], [60.0, 138.85999999999996], [61.0, 154.04545454545456], [62.0, 133.28571428571428], [63.0, 143.8], [64.0, 159.97916666666663], [65.0, 144.58536585365852], [66.0, 163.6842105263158], [67.0, 145.1224489795918], [68.0, 136.11764705882356], [69.0, 152.71428571428575], [70.0, 197.08888888888887], [71.0, 177.32500000000002], [72.0, 159.375], [73.0, 210.82758620689654], [74.0, 222.05769230769232], [75.0, 166.44186046511632], [76.0, 136.47826086956516], [77.0, 186.39655172413788], [78.0, 164.8461538461538], [79.0, 177.8928571428572], [80.0, 186.86885245901644], [81.0, 147.3448275862069], [82.0, 212.33333333333334], [83.0, 152.58536585365857], [84.0, 196.625], [85.0, 213.7049180327869], [86.0, 181.52499999999998], [87.0, 238.78787878787878], [88.0, 225.14035087719301], [89.0, 188.55882352941177], [90.0, 195.64999999999998], [91.0, 226.8888888888889], [92.0, 196.21052631578948], [93.0, 253.42], [94.0, 256.68518518518533], [95.0, 213.7222222222222], [96.0, 245.37037037037038], [97.0, 196.23999999999998], [98.0, 219.61538461538458], [99.0, 265.42857142857156], [100.0, 249.6475734977443], [1.0, 1967.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[96.96307983590961, 242.32315136215374]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 10222.666666666666, "minX": 1.75975788E12, "maxY": 1.1378075966666667E7, "series": [{"data": [[1.75975794E12, 1.1378075966666667E7], [1.759758E12, 9235958.95], [1.75975788E12, 2160831.2666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75975794E12, 53828.8], [1.759758E12, 43694.53333333333], [1.75975788E12, 10222.666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.759758E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 171.1964523281597, "minX": 1.75975788E12, "maxY": 252.5606366851942, "series": [{"data": [[1.75975794E12, 252.5606366851942], [1.759758E12, 246.3518701042698], [1.75975788E12, 171.1964523281597]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.759758E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 98.85158479016381, "minX": 1.75975788E12, "maxY": 111.97456627926542, "series": [{"data": [[1.75975794E12, 111.97456627926542], [1.759758E12, 98.85158479016381], [1.75975788E12, 109.36141906873611]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.759758E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.75975788E12, "maxY": 1.8159645232815922, "series": [{"data": [[1.75975794E12, 0.4370894391106619], [1.759758E12, 0.0], [1.75975788E12, 1.8159645232815922]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.759758E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 52.0, "minX": 1.75975788E12, "maxY": 6396.0, "series": [{"data": [[1.75975794E12, 6396.0], [1.759758E12, 4439.0], [1.75975788E12, 4435.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75975794E12, 374.0], [1.759758E12, 329.0], [1.75975788E12, 302.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75975794E12, 872.0], [1.759758E12, 683.0], [1.75975788E12, 671.4500000000016]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75975794E12, 566.0], [1.759758E12, 440.0], [1.75975788E12, 387.4499999999998]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.75975794E12, 52.0], [1.759758E12, 52.0], [1.75975788E12, 54.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75975794E12, 238.0], [1.759758E12, 233.0], [1.75975788E12, 107.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.759758E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 67.0, "minX": 1.0, "maxY": 1967.0, "series": [{"data": [[29.0, 78.0], [182.0, 67.0], [199.0, 233.0], [1.0, 1967.0], [273.0, 236.0], [293.0, 231.0], [300.0, 242.5], [318.0, 70.0], [305.0, 237.0], [331.0, 271.0], [336.0, 79.0], [351.0, 268.0], [344.0, 237.0], [366.0, 243.5], [365.0, 243.0], [363.0, 236.0], [383.0, 190.0], [381.0, 248.0], [375.0, 235.0], [374.0, 248.0], [371.0, 235.0], [384.0, 235.0], [393.0, 224.0], [392.0, 229.0], [399.0, 235.5], [397.0, 237.0], [386.0, 241.0], [396.0, 231.5], [388.0, 236.0], [389.0, 237.5], [391.0, 234.0], [390.0, 240.0], [398.0, 234.5], [395.0, 237.0], [394.0, 231.0], [402.0, 129.5], [405.0, 214.0], [411.0, 232.0], [410.0, 226.0], [406.0, 235.0], [409.0, 236.0], [408.0, 234.0], [413.0, 233.0], [412.0, 230.0], [403.0, 235.0], [407.0, 231.0], [404.0, 231.0], [401.0, 235.0], [400.0, 234.0], [431.0, 239.0], [422.0, 225.5], [420.0, 237.0], [425.0, 229.0], [429.0, 237.0], [424.0, 240.0], [418.0, 234.0], [426.0, 245.0], [427.0, 228.0], [430.0, 239.0], [423.0, 234.0], [416.0, 237.0], [433.0, 247.0], [436.0, 241.0], [438.0, 227.0], [432.0, 232.0], [439.0, 238.0], [434.0, 231.0], [444.0, 235.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 444.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 51.0, "minX": 1.0, "maxY": 99.0, "series": [{"data": [[29.0, 75.0], [182.0, 65.0], [199.0, 81.0], [1.0, 51.0], [273.0, 95.0], [293.0, 85.0], [300.0, 85.0], [318.0, 67.0], [305.0, 87.0], [331.0, 83.0], [336.0, 76.5], [351.0, 87.0], [344.0, 85.0], [366.0, 89.5], [365.0, 85.0], [363.0, 87.0], [383.0, 96.0], [381.0, 87.0], [375.0, 87.0], [374.0, 99.0], [371.0, 91.0], [384.0, 90.0], [393.0, 90.0], [392.0, 92.0], [399.0, 93.0], [397.0, 94.0], [386.0, 83.5], [396.0, 92.0], [388.0, 90.0], [389.0, 90.0], [391.0, 90.0], [390.0, 91.0], [398.0, 92.0], [395.0, 89.0], [394.0, 95.0], [402.0, 92.0], [405.0, 89.0], [411.0, 93.0], [410.0, 93.0], [406.0, 95.0], [409.0, 88.0], [408.0, 98.0], [413.0, 94.0], [412.0, 92.0], [403.0, 85.0], [407.0, 92.0], [404.0, 89.0], [401.0, 94.0], [400.0, 88.0], [431.0, 87.0], [422.0, 93.0], [420.0, 87.0], [425.0, 98.0], [429.0, 90.0], [424.0, 87.0], [418.0, 92.0], [426.0, 96.0], [427.0, 89.0], [430.0, 96.0], [423.0, 87.0], [416.0, 91.0], [433.0, 92.0], [436.0, 90.0], [438.0, 84.0], [432.0, 88.0], [439.0, 85.0], [434.0, 87.0], [444.0, 82.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 444.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 76.81666666666666, "minX": 1.75975788E12, "maxY": 395.81666666666666, "series": [{"data": [[1.75975794E12, 395.81666666666666], [1.759758E12, 319.6166666666667], [1.75975788E12, 76.81666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.759758E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 75.16666666666667, "minX": 1.75975788E12, "maxY": 395.8, "series": [{"data": [[1.75975794E12, 395.8], [1.759758E12, 321.28333333333336], [1.75975788E12, 75.16666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.759758E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 75.16666666666667, "minX": 1.75975788E12, "maxY": 395.8, "series": [{"data": [[1.75975794E12, 395.8], [1.759758E12, 321.28333333333336], [1.75975788E12, 75.16666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.759758E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 75.16666666666667, "minX": 1.75975788E12, "maxY": 395.8, "series": [{"data": [[1.75975794E12, 395.8], [1.759758E12, 321.28333333333336], [1.75975788E12, 75.16666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.759758E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

