type point = { x: number; y: number; z: number }
type rotation = { x: number; y: number; z: number }

type camera = { position: point; rotation: rotation }

// Change to N-Gon when algorithm is ready
// Add Meshes for clustering into objects
type triangle = [point, point, point]

type world = { camera: camera; tris: triangle[] }

export type { world, triangle, camera, point }
