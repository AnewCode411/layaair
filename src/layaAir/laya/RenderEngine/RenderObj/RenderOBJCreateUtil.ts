import { Bounds } from "../../d3/core/Bounds";
import { Sprite3D } from "../../d3/core/Sprite3D";
import { Transform3D } from "../../d3/core/Transform3D";
import { IndexBuffer3D } from "../../d3/graphics/IndexBuffer3D";
import { VertexBuffer3D } from "../../d3/graphics/VertexBuffer3D";
import { BoundSphere } from "../../d3/math/BoundSphere";
import { Plane } from "../../d3/math/Plane";
import { Vector3 } from "../../d3/math/Vector3";
import { BufferUsage } from "../RenderEnum/BufferTargetType";
import { DrawType } from "../RenderEnum/DrawType";
import { IndexFormat } from "../RenderEnum/IndexFormat";
import { MeshTopology } from "../RenderEnum/RenderPologyMode";
import { IRenderOBJCreate } from "../RenderInterface/IRenderOBJCreate";
import { IRenderElement } from "../RenderInterface/RenderPipelineInterface/IRenderElement";
import { IRenderGeometryElement } from "../RenderInterface/RenderPipelineInterface/IRenderGeometryElement";
import { IRenderQueue } from "../RenderInterface/RenderPipelineInterface/IRenderQueue";
import { ShaderData } from "../RenderShader/ShaderData";
import { BaseRenderQueue } from "./BaseRenderQueue";
import { RenderElementOBJ } from "./RenderElementOBJ";
import { RenderGeometryElementOBJ } from "./RenderGeometryElementOBJ";

export class RenderOBJCreateUtil implements IRenderOBJCreate {
    createTransform(owner: Sprite3D): Transform3D {
        return new Transform3D(owner);
    }

    createBounds(min: Vector3, max: Vector3): Bounds {
        return new Bounds(min, max);
    }

    createBoundsSphere(center: Vector3, radius: number): BoundSphere {
        return new BoundSphere(center, radius);
    }

    createPlane(normal: Vector3, d: number = 0): Plane {
        return new Plane(normal, d);
    }

    createShaderData(): ShaderData {
        return new ShaderData();
    }

    createRenderElement(): IRenderElement {
        return new RenderElementOBJ();
    }

    createBaseRenderQueue(isTransparent: boolean): IRenderQueue {
        return new BaseRenderQueue(isTransparent);
    }

    createRenderGeometry(mode: MeshTopology, drayType: DrawType): IRenderGeometryElement {
        return new RenderGeometryElementOBJ(mode, drayType);
    }

    createVertexBuffer3D(byteLength: number, bufferUsage: BufferUsage, canRead: boolean = false) {
        return new VertexBuffer3D(byteLength, bufferUsage, canRead);
    }

    createIndexBuffer3D(indexType: IndexFormat, indexCount: number, bufferUsage: BufferUsage = BufferUsage.Static, canRead: boolean = false) {
        return new IndexBuffer3D(indexType, indexCount, bufferUsage, canRead);
    }

    createShaderInstance() {

    }


}