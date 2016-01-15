require "http"
require "nokogiri"

get '/' do 
	erb :index
end

get '/colors' do 
	
	hex_colors_array = get_colors + get_colors
	hex_colors_array.to_json
end


