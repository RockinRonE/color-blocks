helpers do 
	def get_colors
		response = HTTP.get("http://www.colourlovers.com/api/palettes/random")
		parsed = Nokogiri::XML(response)
		array_hexes = parsed.css("hex") 
		array_hexes.map {|hex| hex.text}
	end
end