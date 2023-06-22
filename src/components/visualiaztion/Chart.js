import G6 from '@antv/g6';
import {contextMenu, tooltip} from "../../constants/graphConstants";

let graph;
const globalFontSize = 20;
const offsetDiff = 50;
const multiEdgeType = 'quadratic';
const singleEdgeType = 'line';
const toolbar = new G6.ToolBar();
const loopEdgeType = 'loop';
const width = window.innerWidth;
const height = 720;

const Chart = (data) => {
    const canvas = document.querySelector('canvas');
    if(!canvas) {
        graph = new G6.Graph({
            container: 'container',
            width,
            height,
            plugins: [tooltip, toolbar, contextMenu],
            enabledStack: true,
            maxZoom: 2,
            animate: true,
            fitView: true,
            layout: {
                type: "concentric",
                maxLevelDiff: 0.5,
                sortBy: 'degree',
                edgeLength: 10,
                preventOverlap: true,
                nodeSize: 80,
                center: [width / 2, height / 2]
            },
            defaultNode: {
                size: 80,
                icon: {
                    show: true,
                    width: 40,
                    height: 40,
                },
                style: {
                    stroke: '',
                },
                labelCfg: {
                    style: {
                        fontSize: globalFontSize,
                        lineHeight: 100,
                        maxWidth: 20,
                    },
                    position: 'bottom',
                }
            },
            defaultEdge: {
                type: 'cubic-horizontal', labelCfg: {
                    refY: 10,
                    autoRotate: true,
                    style: {
                        fontSize: 25,
                    }
                }, size: 4, color: '#7166F8', style: {
                    endArrow: {
                        path: G6.Arrow.triangle()
                    }
                }
            },
            nodeStateStyles: {
                highlight: {
                    opacity: 1,
                }, dark: {
                    opacity: 0.2,
                }
            },
            edgeStateStyles: {
                highlight: {
                    stroke: '#999',
                }, dark: {
                    stroke: '#C4C4C4', lineWidth: 7,
                }
            },
            modes: {
                default: [{
                    type: 'zoom-canvas', optimizeZoom: 0.1,
                }, {
                    type: 'drag-canvas',
                }, 'drag-node'],
            }
        });
        graph.data(data);
        graph.render();
        toolbar.destroy();
    }
}

export default Chart;