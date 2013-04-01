// Generated by CoffeeScript 1.4.0
(function() {
  var circleActions, circleAttributes, circles, circlesActions, polyData, polygon, svg1, svg2, svg3, svg4;

  polygon = function(sides, size, radius, center) {
    var angle, circle, i, points, x, y, _i, _ref;
    circle = 2 * Math.PI;
    angle = circle / sides;
    points = [];
    for (i = _i = 0, _ref = sides - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      x = (Math.cos(angle * i) * size) + center[0];
      y = (Math.sin(angle * i) * size) + center[1];
      points[i] = {
        "x": x,
        "y": y,
        "r": radius
      };
    }
    return points;
  };

  polyData = polygon(6, 120, 20, [200, 200]);

  svg1 = d3.select("#color-size").append("svg").attr("width", 400).attr("height", 400);

  circles = svg1.selectAll("circle").data(polyData).enter().append("circle").style("fill", "gray").style("stroke", "none").style("stroke-width", 2);

  circleAttributes = circles.attr("cx", function(d) {
    return d.x;
  }).attr("cy", function(d) {
    return d.y;
  }).attr("r", function(d) {
    return d.r;
  });

  circlesActions = circles.transition().delay(1000).duration(2000).style("fill", "lightblue").attr("r", function(d) {
    return d.r * 3;
  });

  svg2 = d3.select("#color-size-click").append("svg").attr("width", 400).attr("height", 400);

  circles = svg2.selectAll("circle").data(polyData).enter().append("circle").style("fill", "gray").style("stroke", "none").style("stroke-width", 2);

  circleAttributes = circles.attr("cx", function(d) {
    return d.x;
  }).attr("cy", function(d) {
    return d.y;
  }).attr("r", function(d) {
    return d.r;
  });

  circleActions = circleAttributes.on("mouseover", function() {
    return d3.select(this).transition().duration(500).style("fill", "red");
  }).on("mouseout", function() {
    return d3.select(this).transition().duration(500).style("fill", "gray");
  }).on("mousedown", function() {
    return d3.select(this).transition().duration(500).style("fill", "lightblue").attr("r", function(d) {
      return d.r * 3;
    });
  });

  svg3 = d3.select("#color-size-click-shrink").append("svg").attr("width", 400).attr("height", 400);

  circles = svg3.selectAll("circle").data(polyData).enter().append("circle").style("fill", "gray").style("stroke", "none").style("stroke-width", 2);

  circleAttributes = circles.attr("cx", function(d) {
    return d.x;
  }).attr("cy", function(d) {
    return d.y;
  }).attr("r", function(d) {
    return d.r;
  });

  circleActions = circleAttributes.on("click", function() {
    return d3.select(this).transition().duration(500).style("fill", "lightblue").attr("r", function(d) {
      return d.r * 3;
    }).each("end", function() {
      return d3.select(this).transition().duration(500).style("fill", "gray").attr("r", function(d) {
        return d.r * 1;
      });
    });
  });

  svg4 = d3.select("#color-size-click-transform").append("svg").attr("width", 400).attr("height", 400);

  circles = svg4.selectAll("circle").data(polyData).enter().append("circle").style("fill", "gray").style("stroke", "none").style("stroke-width", 2);

  circleAttributes = circles.attr("cx", function(d) {
    return d.x;
  }).attr("cy", function(d) {
    return d.y;
  }).attr("r", function(d) {
    return d.r;
  });

  circleActions = circleAttributes.on("click", function() {
    return d3.select(this).transition().duration(500).attr("transform", function(d) {
      return "translate(100,100)";
    }).attr("r", function(d) {
      return d.r * 3;
    }).style("fill", "lightblue").each("end", function() {
      return d3.select(this).transition().duration(300).style("fill", "gray").attr("r", function(d) {
        return d.r * 1;
      }).attr("transform", function(d) {
        return "translate(0,0)";
      }).attr("r", function(d) {
        return d.r * 1;
      });
    });
  });

}).call(this);
