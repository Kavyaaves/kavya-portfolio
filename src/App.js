import React, { Component } from "react";
import {
  Scene, PerspectiveCamera, MeshToonMaterial, Group,
  WebGLRenderer, Clock, BufferGeometry, BufferAttribute, PointsMaterial,
  Points, DirectionalLight
} from "three";
import gsap from "gsap";
import { motion } from "framer-motion"
import AllScreens from "./components/AllScreens";
import "./App.css"
class App extends Component {
  componentDidMount() {
    /**
  * Base
  */
    // Canvas
    const canvas = document.querySelector('canvas.webgl')

    // Scene
    const scene = new Scene()

    /**
     * Objects
     */
    const objectsDistance = 4

    // Material
    const material = new MeshToonMaterial({ color: '#ffeded' })

    // Meshes
    // const mesh1 = new THREE.Mesh(
    //   new THREE.TorusGeometry(1, 0.4, 16, 60),
    //   material
    // )
    // const mesh2 = new THREE.Mesh(
    //   new THREE.ConeGeometry(1, 2, 32),
    //   material
    // )
    // const mesh3 = new THREE.Mesh(
    //   new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
    //   material
    // )

    // mesh1.position.y = - objectsDistance * 0
    // mesh2.position.y = - objectsDistance * 1
    // mesh3.position.y = - objectsDistance * 2

    // mesh1.position.x = 2
    // mesh2.position.x = - 2
    // mesh3.position.x = 2

    // const sectionMeshes = [mesh1, mesh2, mesh3]

    // scene.add(mesh1, mesh2, mesh3)

    /**
     * Particles
     */
    // Geometry
    const particlesCount = 500
    const positions = new Float32Array(particlesCount * 5)

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance * 5
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }

    const particlesGeometry = new BufferGeometry()
    particlesGeometry.setAttribute('position', new BufferAttribute(positions, 3))

    // Material

    const particlesMaterial = new PointsMaterial({
      color: '#cffafe',
      sizeAttenuation: true,
      size: 0.05
    })

    // Points
    const particles = new Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    /**
     * Lights
     */
    const directionalLight = new DirectionalLight('#ffffff', 2)
    directionalLight.position.set(1, 1, 0)
    scene.add(directionalLight)

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight

      // Update camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      // Update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    /**
     * Scroll
     */
    let scrollY = window.scrollY
    let currentSection = 0

    window.addEventListener('scroll', () => {
      scrollY = window.scrollY
      const newSection = Math.round(scrollY / sizes.height)

      if (newSection != currentSection) {
        currentSection = newSection
        gsap.to(
          [currentSection].rotation,
          {
            duration: 2.5,
            ease: 'power2.inOut',
            x: '+=6',
            y: '+=3'
          }
        )
      }
    })

    /**
     * Cursor
     */
    const cursor = {}
    cursor.x = 0
    cursor.y = 0

    window.addEventListener('mousemove', (event) => {
      cursor.x = -event.clientX / sizes.width - 0.5
      cursor.y = -event.clientY / sizes.height - 0.5
    })

    /**
     * Camera
     */
    // Group
    const cameraGroup = new Group()
    scene.add(cameraGroup)

    // Base camera
    const camera = new PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
    camera.position.z = 6
    cameraGroup.add(camera)

    /**
     * Renderer
     */
    const renderer = new WebGLRenderer({
      canvas: canvas,
      alpha: true
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    /**
     * Animate
     */
    const clock = new Clock()
    let previousTime = 0

    const tick = () => {
      const elapsedTime = clock.getElapsedTime()
      const deltaTime = elapsedTime - previousTime
      previousTime = elapsedTime

      // Animate meshes

      // Animate camera
      camera.position.y = - scrollY / sizes.height * objectsDistance

      const parallaxX = cursor.x * 0.5
      const parallaxY = - cursor.y * 0.5

      cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime
      cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime

      // Render
      renderer.render(scene, camera)

      // Call tick again on the next frame
      window.requestAnimationFrame(tick)
    }

    tick()
  }
  render() {
    return <motion.div>
      <canvas class="webgl">
      </canvas>
      <AllScreens />

    </motion.div >
  }
}
export default App;
