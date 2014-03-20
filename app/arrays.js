if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {

    indexOf : function(arr, item) {
        for (var i=0; i<arr.length; i++) {
            if (arr[i]===item) {
                return i;
            }
        } return -1;
    },

    sum : function(arr) {
        arrsum = 0
        for (var i = 0; i<arr.length; i++) {
            arrsum = arrsum + arr[i];
        }
        return arrsum;
    },

    remove : function(arr, item) {
        newarray =[]
        for (i=0; i<arr.length; i++) {
            if (arr[i]!== item) {
                newarray.push(arr[i]);
            }
        }
        return newarray
    },

    removeWithoutCopy : function(arr, item) {

        for (var i=0,len=arr.length; i<len; i++) {
            if (arr[i]===item) {
                arr.splice(i,1);
                i--;
                len = len - 1
            }
        } return arr;
    },


    append : function(arr, item) {
        arr.push(item)
        return arr

    },

    truncate : function(arr) {
        arr.splice(-1,1)
        return arr
    },

    prepend : function(arr, item) {
        arr.splice(0,0,item);
        return arr;
    },

    curtail : function(arr) {
        arr.splice(0,1);
        return arr
    },

    concat : function(arr1, arr2) {
        newarr = arr1.concat(arr2);
        return newarr;
    },

    insert : function(arr, item, index) {
        arr.splice(index,0,item);
        return arr
    },

    count : function(arr, item) {
        count = 0
        for (i=0; i<arr.length;i++) {
            if (arr[i]===item) {
                count++;
            }
        }
        return count;
    },

    duplicates : function(arr) {
        var sorted_arr = arr.sort();

        var results = [];
        for (var i = 0; i < arr.length; i++) {
            if (sorted_arr[i + 1] === sorted_arr[i]) {
                results.push(sorted_arr[i]);
            }
        }
        resultsnew=[];
        for (var i = 0; i<arr.length;i++) {
            if(results[i]===results[i+1]) {
                resultsnew.push(results[i])
            }
        }
        return resultsnew;

      },

    square : function(arr) {
        newarr = [];
        for (i=0;i<arr.length;i++) {
            newarr.push(arr[i]*arr[i]);
        }
        return newarr;
    },

    findAllOccurrences : function(arr, target) {
        newarrofindex = []
        for (var i = 0; i<arr.length;i++) {
            if (arr[i] ===target) {
                newarrofindex.push(i);
            }
        }
        return newarrofindex
    }
  };
});
