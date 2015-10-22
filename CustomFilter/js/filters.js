
angular.module('customFilter').filter('PriceRange',function()
	{
		return function(input,min,max){
			if (!input || !input.length) { return; }

			return input.reduce(function(lastValue,currentValue){
				lastValue = lastValue || [];
				if(currentValue.Price >= min && currentValue.Price <= max){
					lastValue.push(currentValue);
				}
				return lastValue;
			},[])

		
		}

	});