export const MAP_STYLE = 'https://d3dt5tsgfu6lcf.cloudfront.net/style/tools/web?mode=light';

// OBJ model width 2073mm, length 4946mm
// Volkswagen Passat: width 1820mm, length 4780mm
export const CAR = {
  mesh: 'assets/car.obj',
  origin: [1.08, -0.32, 0],
  scale: 0.0009
};

export const SETTINGS = {
  viewMode: {
    type: 'select',
    title: 'View Mode',
    data: {TOP_DOWN: 'Top Down', PERSPECTIVE: 'Perspective', DRIVER: 'Driver'}
  }
};

export const XVIZ_STYLES = {
  'lidar-points': {
    '*': {
      fillColor: '#00a',
      radiusPixels: 2
    }
  },
  tracklets: {
    '*': {
      extruded: true,
      wireframe: true,
      // TODO - use dynamic height
      height: 1.5,
      fillColor: '#00000080'
    },
    'objectType=Car': {
      fillColor: '#7DDDD780',
      strokeColor: '#7DDDD7'
    },
    'objectType=Cyclist': {
      fillColor: '#DA70BF80',
      strokeColor: '#DA70BF'
    },
    'objectType=Pedestrian': {
      fillColor: '#FEC56480',
      strokeColor: '#FEC564'
    },
    'objectType=Van': {
      fillColor: '#267E6380',
      strokeColor: '#267E63'
    },
    'objectType=Unknown': {
      fillColor: '#D6A00080',
      strokeColor: '#D6A000'
    }
  },
  'tracklets-trajectory': {
    '*': {
      strokeColor: '#FEC557',
      strokeWidth: 0.3,
      strokeWidthMinPixels: 1
    }
  },
  'vehicle-pose-trajectory': {
    '*': {
      strokeColor: '#57AD57AA',
      strokeWidth: 1.4,
      strokeWidthMinPixels: 1
    }
  }
};
