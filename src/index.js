/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
      let n,k,f,count=0;
          for (i=0; i< preferences.length; i++) {
               n = preferences[i];
               k = preferences[n-1];
               f = preferences[k-1];
                  if (((f-1)==i)&&(n!==k)){
                        count++;
                        preferences[i]=-1;
                        preferences[n-1]=-1;
                        preferences[k-1]=-1;
                        }
          }
        return (count);
};
